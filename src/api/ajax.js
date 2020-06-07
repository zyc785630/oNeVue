import axios from 'axios'
import nprogress from 'nprogress' 
const instance = axios.create({
    baseURL:'/api',
    timeout:15000
})
//注册请求拦截器
axios.interceptors.request.use(config=>{
    //显示进度条
    nprogress.start()

    return config
})
//注册响应的拦截器
axios.interceptors.response.use(
    response=>{
        nprogress.done()
    return response.data
},
error=>{
    alert(error.message||'未知错误')

    nprogress.done()

    throw error
}
)

export default instance