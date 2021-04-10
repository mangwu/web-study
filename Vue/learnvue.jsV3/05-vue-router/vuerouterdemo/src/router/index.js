// 配置路由相关信息

// 导入路由对象
import VueRouter from 'vue-router'
// 导入vue
import Vue from 'vue'
// 导入组件
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'
const Profile = () => import('../components/Profile')
// 1. 通过vue.use(插件)，安装插件(这个插件就是vue路由)
Vue.use(VueRouter)

// 2.创建路由对象,需要使用路由就要创建其实例
const router = new VueRouter({
  // 路由实现方式不使用hash值
  mode: 'history',
  // 激活时添加的属性 一般不需要改变使用默认值就好
  linkActiveClass: 'active',
  // 传入相关选项
  // 配置路由和组件之间的映射关系的对象
  routes: [
    // 一个url对应一些组件 :映射关系，一个映射关系就是一个对象
    // 默认显示首页
    {
      path: '/',
      // 默认显示首页，但url不会是/home
      // component: Home

      // 使用重定向 '/'会被重定向为'/home'
      redirect: '/home'
    },
    {
      // 协议头：// host/query
      path: '/home',
      component: () => import('../components/Home'),
      // 添加路由元数据 描述路由数据的数据
      meta: {
        title: '首页'
      },
      // 配置子组件 
      children: [
        // {
        //   // 重定向
        //   path: '',
        //   redirect: 'news',
        // },
        {
          // 注意这里不能使用'/'
          path: 'news',
          component: () => import('../components/HomeCpn/News')
        },
        {
          path: 'message',
          component: () => import('../components/HomeCpn/Message')
        }
      ]
    },
    {
      path: '/about',
      // 路由懒加载
      component: () => import('../components/About'),
      meta: {
        title: '关于'
      },
    },
    {
      path: '/user/:userName',
      component: () => import('../components/User'),
      meta: {
        title: '用户'
      },
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        title: '档案'
      },
    }
  ]
})
// 导航守卫 beforeEach是一个前置钩子（在跳转之前的一个回调)
router.beforeEach((to, from, next) => {
  
  // from为源地址(route)，to为目的地址(route)
  document.title = to.matched[0].meta.title
  // matched如果组件有子组件且重定向了，matched数组就会有源组件路由和重定向组件路由
  // console.log(to);
  // 下一步，执行跳转
  next()

})
// 后置钩子
// router.afterEach((to, from) => {
//   // console.log(from);

// })
// 3. 将router对象传入到Vue实例中，导出成模块
export default router
