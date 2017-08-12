<template>
  <Layout title="iPhone 7" description="iPhone 7 çšĺ" keywords="iPhone, apple">
    <h1>Order List</h1>
    <table border="1" style="width:100%;">
      <tr>
        <td>下单时间</td>
        <td>电话</td>
        <td>联系人</td>
        <td>地址</td>
        <td>价格</td>
        <td>数量</td>
        <td>合计</td>
        <td>操作</td>
      </tr>
      <tr v-for="o in data">
        <td>{{o.order.createtime}}</td>
        <td>{{o.order.telephone}}</td>
        <td>{{o.order.name}}</td>
        <td>{{o.order.address}}</td>
        <td class="right">{{o.order.price}}</td>
        <td class="right">{{o.order.amount}}</td>
        <td class="right">{{o.order.price * o.order.amount}}</td>
        <td>
          <button>已处理</button>
          <button>删除</button>
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

