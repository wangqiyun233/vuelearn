import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import newcomponent from '@/components/newcomponent'
import tableVue from '@/components/table'
const products = () => import(/* webpackChunkName: "products" */ '@/components/products')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/new',
      name:'newcomponent',
      component:newcomponent
    },{
      path:'/Table',
      name:'tabelVue',
      component:tableVue
    },{
      path:'/products',
      name:'products',
      component:products
    }
  ]
})
