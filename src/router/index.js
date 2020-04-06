import Vue from "vue";
import Router from "vue-router";

// 懒加载
const Home = () => import("@/pages/home/Home");
const ProductList = () => import("@/pages/productlist/ProductList");
const ProductDetail = () => import("@/pages/productdetail/ProductDetail");
const NewsList = () => import("@/pages/newslist/NewsList");
const NewsDetail = () => import("@/pages/newsdetail/NewsDetail");
const ContactUs = () => import("@/pages/contact/ContactUs");

// import Home from "@/pages/home/Home";
// import ProductList from "@/pages/productlist/ProductList";
// import ProductDetail from "@/pages/productdetail/ProductDetail";
// import NewsList from "@/pages/newslist/NewsList";
// import NewsDetail from "@/pages/newsdetail/NewsDetail";
// import ContactUs from "@/pages/contact/ContactUs";

Vue.use(Router);

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/productlist",
      name: "ProductList",
      component: ProductList
    },
    {
      path: "/productdetail/:id",
      name: "ProductDetail",
      component: ProductDetail
    },
    {
      path: "/newslist",
      name: "NewsList",
      component: NewsList
    },
    {
      path: "/newsdetail",
      name: "NewsDetail",
      component: NewsDetail
    },
    {
      path: "/contact",
      name: "Contact",
      meta: {
        auth: true
      },
      component: ContactUs
    }
  ],
  scrollBehavior(to, from, savePosition) {
    return { x: 0, y: 0 };
  }
});

const isLogin = true;
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (isLogin) {
      next();
    } else {
      console.log("还没登录！");
      next("/");
    }
  } else {
    next();
  }
});

export default router;
