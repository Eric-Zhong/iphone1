<template>
  <Layout title="iPhone 7" description="iPhone 7 599" keywords="iPhone, apple">
    <h3>订单清单</h3>
    <h5>显示当前所有待处理的订单信息。可以作废、处理、关闭等操作。</h5>
    <table border="1" style="width:100%;">
      <tr>
        <td>订单号</td>
        <td>下单时间</td>
        <td>客户名称</td>
        <td>电话</td>
        <td>地区</td>
        <td>地址</td>
        <td>产品编码</td>
        <td>颜色</td>
        <td>价格</td>
        <td>数量</td>
        <td>合计</td>
        <td>备注</td>
        <td>操作</td>
      </tr>
      <tr v-for="o in data">
        <td>{{o.order.oid}}</td>
        <td>{{o.order.createtime}}</td>
        <td>{{o.order.name}}</td>
        <td>{{o.order.telephone}}</td>
        <td>{{o.order.area}}</td>
        <td>{{o.order.address}}</td>
        <td>{{o.order.product}}</td>
        <td>{{o.order.color}}</td>
        <td class="right">{{o.order.price}}</td>
        <td class="right">{{o.order.amount}}</td>
        <td class="right">{{o.order.price * o.order.amount}}</td>
        <td>{{o.order.comment}}</td>
        <td>
          <button>已处理</button>
          <button>作废</button>
        </td>
      </tr>
    </table>
  </Layout>
</template>

<style>
  @import './index.css';
</style>

<script type="text/babel">
export default {
  components: {
  },
  data() {
    return {};
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  }
}
</script>

