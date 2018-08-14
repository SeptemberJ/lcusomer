
import Vue from 'vue'
// import Router from 'vue-router'
import VueRouter from 'vue-router'
import Store from '../vuex/store'
// import App from '../app'
import SmartHox_Home from '@/page/SmartHox/Home'
// import SmartHox_ApplicationScene from '../page/SmartHox/ApplicationScene'
import SmartHox_Products from '@/page/SmartHox/Products'
import SmartHox_ProductDetail from '@/page/SmartHox/ProductDetail'
// import Company from '../page/SmartHox/Company'
import HelloWorld from '@/components/HelloWorld'

// const routes = [
//   {
//     path: '/',
//     component: App,
//     children: [
//     {path:'/SmartHox_Home',name: '首页', component: SmartHox_Home},
//     {path:'/SmartHox_ApplicationScene',name: '物联网场景应用', component: SmartHox_ApplicationScene},
//     {path:'/SmartHox_ProductDetail',name: '产品', component: SmartHox_ProductDetail},
//     {path:'/Company',name: '关于波然', component: Company},
//     {path:'*', redirect: '/SmartHox_Home'}
//       // {path: '/article/:id', name: 'article', component: Article},
//     ]
//   }
// ]
let routes = [
	{
        path: '/SmartHox_Home',
        component: SmartHox_Home,
        name: '首页',
        hidden: true
    },
    {
        path: '/SmartHox_Products',
        component: SmartHox_Products,
        name: '产品',
        hidden: true
    },
    {
        path: '/SmartHox_ProductDetail/:name',
        component: SmartHox_ProductDetail,
        name: '产品详情',
        hidden: true
    }
]
// let routes = [
// 	{
//         path: '/SmartHox_Home',
//         component: SmartHox_Home,
//         name: '首页',
//         hidden: true
//     }
// ]
export default routes;
