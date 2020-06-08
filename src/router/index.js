/* 
路由器对象
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// 声明使用vue插件
Vue.use(VueRouter)


const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, onComplete, onAbort) {

  console.log('push()', location, onComplete, onAbort)
  
  if (!onComplete && !onAbort) {
   
    return originPush.call(this, location).catch(error => {
      console.log('---push', error.message)
    })
  } else { // 2. 如果传入了回调函数, 本身就没问题, 直接调用原本的push()就可以
    originPush.call(this, location, onComplete, onAbort)
  }
}

VueRouter.prototype.replace = function (location, onComplete, onAbort) {

  if (!onComplete && !onAbort) {
    return originReplace.call(this, location).catch(error => {
      console.log('---replace', error.message)
    })
  } else {
    originReplace.call(this, location, onComplete, onAbort)
  }
}


export default new VueRouter({
  mode: 'history', // 不带#
  routes,
})