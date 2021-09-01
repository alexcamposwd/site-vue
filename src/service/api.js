import axios from 'axios'

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/alexcamposwd/restapi_images_site/'
})

export default api