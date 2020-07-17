import request from '../utils/http'

//登录接口
export function loginApi(userName, password) {
    const formData = new FormData();
    formData.append("username", userName);
    formData.append("password", password);
    formData.append("rememberMe", false);
    return request.post('/api/login', formData)
}

//获取个人信息接口
export function getUserInfo() {
    return request.get('/api/login-user/info')
}

//退出登录接口
export function logout() {
    return request.get('/api/logout')
}

//修改个人信息接口
export function modInfo(userInfo) {
    const formData = new FormData();
    formData.append("userName", userInfo.userName);
    formData.append("email", userInfo.email);
    formData.append("phonenumber", userInfo.phonenumber);
    formData.append("sex", userInfo.sex);
    formData.append("remark", userInfo.remark);
    return request.post('/api/system/user/profile/update', formData)
}

//注册的接口
export function registerInfo(list) {
    const formData = new FormData();
    formData.append("loginName", list.loginname);
    formData.append("userName", list.username);
    formData.append("phonenumber", list.tel)
    formData.append("code", list.sms);
    formData.append("password", list.password);
    formData.append("sex", list.sex);
    formData.append("remark", list.remark);

    return request.post('/api/registry', formData);
}

//发送验证码接口
export function sendCode(mobile) {
    return request.get(`/api/short-message/vcode/${mobile}`)
}

//忘记密码接口
export function forgetPassword(list) {
    const formData = new FormData();
    formData.append("loginName", list.loginname);
    formData.append("phonenumber", list.tel);
    formData.append("code", list.sms);
    formData.append("password", list.password);
    return request.post('/api/password/forget', formData);
}

// 修改头像接口
export function changeImg(file) {
    const formData = new FormData();
    formData.append("avatarfile", file);
    return request.post('/api/system/user/profile/update/avatar/nos', formData)
}

//收藏列表接口
export function collectList() {
    return request.get(`/api/cms/article/collect/list`)

}