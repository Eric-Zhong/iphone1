var fs = require('fs');
var path = require('path');
const low = require('lowdb');
const fileAsync = require('lowdb/lib/storages/file-sync');

let data_folder = process.cwd();

let db = low(data_folder + '/__db/iphone_order_db.json', {
    storage: fileAsync
});


    // 使用了RESTful的方式定义了Orders的Api接口
// KB: 路由定义参考这里 https://eggjs.org/zh-cn/basics/router.html
exports.index = function* (ctx) {
    // yield ctx.render("index");

    // 将Ajax转入的form数据，转成string，用于输出显示
    let form = JSON.stringify(ctx.request.body); // 将JSON obj转string
    let data = ctx.request.body;
    data.createtime = new Date();

    console.log(form);

    console.log('开始创建订单');
    // var result = yield createOrder(data);

    db.defaults({ orders: [] }).write();
    const result = db.get('orders')
        .push({ order: data })
        .write();

    console.log('结束了异步创建订单');

    console.log('####################################3');
    console.log('使用LowDB记录Order数据');
    console.log('####################################3');

    response = {
        'success': true,
        'message': '创建订单成功，稍后会有服务专员与你联系。',
        'data': data
    };

    ctx.body = response;

};


exports.list = function* (ctx) {
    var orders = db.get('orders').value();
    var model = {data: orders};
    yield ctx.render('order/index.js', model);
};



exports.new = function* (ctx) {
    yield ctx.render("new");
};

exports.create = function* () { };
exports.show = function* () { };
exports.edit = function* () { };
exports.update = function* () { };
exports.destroy = function* () { };


var createFolder = function (to) { //文件写入
    var sep = path.sep
    var folders = path.dirname(to).split(sep);
    var p = '';
    while (folders.length) {
        p += folders.shift() + sep;
        if (!fs.existsSync(p)) {
            fs.mkdirSync(p);
        }
    }
};

////////////////////////////////////////////////////////////
////////////// 定义需要通过异步请求执行的创建订单逻辑 ////////////
////////////////////////////////////////////////////////////

var createOrder = function (data) {
    return new Promise(function (resolve, reject) {
        var response = {}; // 返回值定义
        // 异步处理方法
        // 因为要将数据写入Aliyun的TableStore，在这里引用这Nodejs的SDK
        // 在这里增加Create订单的操作
        var TableStore = require('tablestore');

        var client = new TableStore.Client({
            accessKeyId: 'LTAIPHidSaKTwMox',
            secretAccessKey: 'WuziCVm8Gke2SHJImyhV088H1FxKCh',
            endpoint: 'http://ts-iphone-mall.cn-hangzhou.ots.aliyuncs.com',
            instancename: 'ts-iphone-mall',
            maxRetries: 20 //默认20次重试，可以省略这个参数
        });

        // 计算 yyyy-mm-dd, hh:mm:ss
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();

        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var current_date = date.getFullYear() + seperator1 + month + seperator1 + strDate;
        var current_time = date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds();
        var current_datetime = current_date + ' ' + current_time;

        // 构造订单数据结构
        var params = {
            tableName: "tb_order",
            condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
            primaryKey: [
                { 'create_date': current_date },
                { 'create_time': current_time },
                { 'mobile': data.telephone.toString() }
            ],
            attributeColumns: [
                { 'product': data.product },
                { 'color': data.color },
                { 'amount': data.amount },
                { 'name': data.name },
                { 'area': data.area },
                { 'city': data.city },
                { 'depart': data.depart },
                { 'address': data.address },
                { 'price': data.price },
                { 'comment': data.comment },
                { 'createtime': current_datetime },
                { 'version': '' }
            ],
            returnContent: { returnType: TableStore.ReturnType.Primarykey }
        };

        // console.log('--------------------------------');
        // console.log(params);
        // console.log('--------------------------------');

        // 向 table store 中写入数据
        client.putRow(params, function (err, data) {
            if (err) {
                console.log('error:', err);
                response = {
                    'success': false,
                    'message': '创建订单失败，请稍后再提交一次，谢谢！',
                    'error': err
                };
            }
            else {
                response = {
                    'success': true,
                    'message': '创建订单成功，稍后会有服务专员与你联系。',
                    'data': data
                };
            }
            console.log('** Aliyun table store put row was completed.')
            resolve(response);
        });

    });
};


var getCurrentDate = function () {
    // 计算 yyyy-mm-dd, hh:mm:ss
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();

    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var current_date = date.getFullYear() + seperator1 + month + seperator1 + strDate;
    return current_date;
};