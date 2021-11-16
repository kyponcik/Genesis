import UserInfo from "../pages/UserInfo";
import TrendingFeed from '../components/TrendingFeed';
import {createRouter, createWebHistory} from "vue-router";

const routes = [
   {
      path:'/',
      component:TrendingFeed
   },
   {
      path:'/userinfo/:id',
      component:UserInfo
   }

]

const router = createRouter({
   routes,
   history: createWebHistory(process.env.BASE_URL)
})

export default router;