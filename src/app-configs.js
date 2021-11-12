import axios from 'axios'

const BaseURL = "http://nyx.vima.ekt.gr:3000"

const handleHTTPRequestError = error => {
    if (error.response) {
        if (error.response.status === 500) {
            return console.log('Server error')
        }
        return console.log(error.response.data.message)
    } else {
        return console.log("Network Error")
    }
}

axios.interceptors.response.use(response => {
    return Promise.resolve(response)
}, (error, props) => {
    handleHTTPRequestError(error)
    return Promise.reject(error)
})

axios.defaults.baseURL = BaseURL