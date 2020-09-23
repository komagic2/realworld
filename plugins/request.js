// 基于 axios 封住的请求模块
import axios from 'axios'
const baseURL = 'https://conduit.productionready.io'
export const request = axios.create({
    baseURL: baseURL
})

export default ({ store }) => {
    // 请求拦截器
    request.interceptors.request.use(function (config) {
        const { user } = store.state
        if (user && user.token) {
            config.headers.Authorization = `Token ${user.token}`
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
    
    // 响应拦截器
}