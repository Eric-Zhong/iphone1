<template>
  <article>
    <h2 name="order_form" id="mark_order_form">订单信息</h2>
    <!--订单-->
    <div id="order">
      <div id="buy" class="warp">
        <form id="form" name="form" action="http://csxiangfa.com/notorder.asp" method="post" onsubmit="return postcheck()">
          <input type="hidden" name="orderid" id="orderid" value="no.2017629202526418">
          <div class="bdbox">
            <label class="bdxx">
              <em>*</em>产品
            </label>
            <div class="dxbox red chanpin not3chanpin0">
              <label class="now">
                <input type="radio" name="product" id="a0" value="IP128-01" alt="699" checked="">&nbsp;正品行货4.7寸128G&nbsp;&nbsp;699元
              </label>
            </div>
          </div>
          <!--附加属性b-->
          <div class="bdbox">
            <label class="bdxx">
              <em>*</em>产品颜色</label>
            <div class="dxbox red chanpin not3chanpin1">
              <label v-for="c in optionColor" v-bind:key="c.text" @click="colorClick(c)" v-bind:class="[c.checked?'now':'']">
                <input type="radio" name="chanpin1" v-model="order.color">&nbsp;{{c.text}}
              </label>
            </div>
          </div>
  
          <!--附加属性e-->
          <div class="bdbox">
            <label class="bdxx">
              <em>*</em>数量</label>
            <!-- KB: 可以用 v-on:click，或者是 @click -->
            <a class="jian" href="javascript:;" @click="minnumber()">-</a>
            <input type="text" class="shuliang" size="4" name="mun" id="mun" readonly="" v-model="order.amount">
            <a class="jia" href="javascript:;" @click="addnumber()">+</a>
            <div v-show="order.amount>=10">&nbsp;特价商品，最多一次可购买10台</div>
          </div>
          <div class="bdbox">
            <label class="bdxx">
              <em>*</em>姓名</label>
            <div class="textbox">
              <input type="text" name="name" v-model="order.name">
            </div>
          </div>
          <div class="bdbox">
            <label class="bdxx">
              <em>*</em>手机</label>
            <div class="textbox">
              <input type="text" name="mob" v-model="order.telephone">
            </div>
          </div>
          <div class="bdbox">
            <label class="bdxx">
              <em>*</em>地区</label>
            <!-- 在这里写个Vue.component，用于显示3级区域选择 -->
            <area-selector :result.sync="order.area"></area-selector>
          </div>
          <div class="bdbox">
            <label class="bdxx">
              <em>*</em>地址</label>
            <div class="textbox">
              <input type="text" name="address" v-model="order.address">
            </div>
          </div>
          <div class="bdbox">
            <label class="bdxx">
              <em>*</em>金额</label>
            <div class="text3box">
              <input name="totalPrice" readonly="" style="width:80px;" v-model="order.totalPrice"> 元
              <span id="zfbyh"></span>
            </div>
          </div>
          <div class="bdbox">
            <label class="bdxx">
              <em>*</em>付款</label>
            <div class="dxbox">
              <label for="b1">
                <img src="../../asset/images/iphone/hdfk.gif">
              </label>
            </div>
          </div>
          <div class="bdbox">
            <label class="bdxx">留言</label>
            <div class="text2box">
              <textarea name="guest" v-model="order.comment"></textarea>
            </div>
          </div>
          <div class="subbox">
            <input type="button" name="submit" value="立即提交订单" @click="submit()">
          </div>
          <input type="hidden" name="_csrf" v-bind:value="csrf">
        </form>
        <div style="clear:both;"></div>
      </div>
    </div>
  </article>
</template>


<!-- 这里引用CSS -->
<style>
@import "./form.css";
</style>



<!-- 这里写Javascript -->
<script type="text/babel">

import AreaSelector from '../area/index.vue';

export default {
  props: ["csrf"],
  components: { AreaSelector },
  // 页面中绑定的数据
  data() {
    return {
      optionColor: [
        { text: "银色", checked: true }
        // ,
        // { text: "土豪金", checked: false },
        // { text: "科技银", checked: false }
      ],
      submited: false,
      order: {
        product: "IP128-01",
        color: "银色",
        amount: 1,
        name: "",
        telephone: "",
        area: {},
        city: "",
        depart: "",
        address: "",
        price: 699,
        totalPrice: 699,
        comment: ""
      }
    };
  },
  // View层计算属性字段
  computed: {
    totalPrice: function(){
      return this.order.amount * this.order.price;
    }
  },
  // 定义当前页面需要用到的方法
  methods: {
    minnumber() {
      let vm = this;
      if (this.order.amount > 0) this.order.amount--;
      this.order.totalPrice = this.order.price * this.order.amount;
    },
    addnumber() {
      let vm = this;
      if (this.order.amount < 10) this.order.amount++;
      this.order.totalPrice = this.order.price * this.order.amount;
    },

    colorClick(color) {
      let vm = this;
      vm.resetColor();  // 清理原始值为false
      color.checked = true; // 设置当前值为true
      vm.order.color = color.text; // 设置订单中的color为当前选中值
    },
    resetColor() {
      let vm = this;
      vm.optionColor.forEach(function (element) {
        element.checked = false;
      }, this);
    },
    onSelected() {
      console.log("selected");
    },
    submit() {
      let vm = this; 

      // 数据有效性判断
      var err = "";
      if(vm.order.name === ''){
        err += "需要联系人姓名\n";
      }
      if(vm.order.amount == 0){
        err += "数据不能小于0\n";
      }
      if(vm.order.telephone === ''){
        err += "需要留下你的手机号\n";
      }
      if(vm.order.address === ''){
        err += "需要你的详细地址信息\n";
      }

      if(err!==""){
        alert(err);
        return;
      }


      // 为了方便在post中增加csrf，这里定义一个option
      vm.order._csrf = vm.csrf;
      let option = {
        // params: {"_csrf": vm.csrf}
      };

      // KB: 发送CSRF的方式
      // 1.在url后面加 ?_csrf=xxxxxx
      // 2.在body中加 _csrf=xxxxx

      // 发送ajax请求，写入订单数据
      // KB: Vue-resource的http模块学习地址http://www.jianshu.com/p/3ce2bd36596e
      // 这里使用 this.$http.post(url, option, ...)
      // 这个讲解也很不错：http://www.it165.net/pro/html/201607/72598.html
      this.$http.post(
        '/api/v1/order',
        // '/api/v1/order?_csrf=' + vm.csrf,
        vm.order,
        option,
        {
          emulateJSON: true
        }
      ).then(function (response) {
        var resp = response.data;
        if (resp.success) {
          vm.submited = true; // 提交过了，看看要不要隐藏些东西。
          alert(resp.message);
        } else {
          console.log(resp.error);
          alert(resp.message);
        }
      }, function (response) {
        console.log(response);
        alert('当前服务不可用，请稍后再试');
      });
    }
  },
  // KB: mounted, 该钩子在服务器端渲染期间不被调用
  // https://cn.vuejs.org/v2/api/#mounted
  mounted() { }
}


</script>