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


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
