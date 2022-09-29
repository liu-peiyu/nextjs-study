import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
})

instance.interceptors.request.use(config=>{
    console.log('请求配置拦截')
    return config
}, (err)=>{
    console.error(`request:====${err}`)
})

instance.interceptors.response.use((res)=>{
    return res.data
}, err=>{
    console.error(`response:====${err}`)
})

export default instance