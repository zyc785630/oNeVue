import ajax from './ajax'

export function reqLogin(moblie,password){
    return ajax({
        url:'/user/passport/login',
        method:'post',
        data:{
            moblie,
            password
        }
    })
}


export const reqCategorys = () =>ajax('./product/getBaseCategoryList')