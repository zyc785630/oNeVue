/* 
路由器对象
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// 声明使用vue插件
Vue.use(VueRouter)
const originPush = VueRouter.prototype.push
// const originReplace = VueRouter.prototype.replace
VueRouter.prototype.push= function(location,onComplete,onAbort){
    if(!onComplete&&onAbort){
        return originPush.call(this,location).catch(error=>{
        console.log('---',error.message)
      })
    }else{
      originPush.call(this,location,onComplete,onAbort)
    }
}

// 向外暴露路由器对象
export default new VueRouter({
  mode: 'history', // 不带#
  routes,
})