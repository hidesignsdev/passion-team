import axios from 'axios';
import configs from './configs.json'

const getAxiosInstance = async () => {
    const headers = {}
    headers['X-Parse-Application-Id'] = configs.API_APP_ID
    headers['X-Parse-REST-API-Key'] = configs.API_REST_API_KEY
    const apiServerUrl = configs.API_SERVER_URL

    const axiosInstance = axios.create({
        baseURL: apiServerUrl,
        headers
    })

    axiosInstance.interceptors.response.use(
        response => {
            console.log(response)
            if([200].includes(response.status)){
                const result = response.data
                // result.statusCode = response.status
                return result
            }   
            return Promise.reject(response)
        },
        error => {
            const {code} = error.response.data
            if(code){
                return Promise.reject(error.response.data)
            }
            return Promise.reject(error.response.statusText)
        }
    )

    return axiosInstance
}

const request = async (url, data) => {
    try{
        const API = await getAxiosInstance()
        return API.post(url, data)
    } catch (error) {
        return Promise.reject(error)
    }
}

export default request