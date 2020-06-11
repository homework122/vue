import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path:'/FlowRecord',
    component: () => import('../views/FlowRecord')
  },
  {
    path:'/Refund',
    component: () => import('../views/Refund')
  },
    // 分类
    {
        path:'/classification',
        component: () => import('../views/classification')
    },
    // 商品管理
    {
        path:'/specifications',
        component: () => import('../views/specifications')
    },
// 发不优惠券
    {
        path:'/youhuiquan',
        component: () => import('../views/youhuiquan')
    },


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
