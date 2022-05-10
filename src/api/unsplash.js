import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID rklhgBWLx8fd7VxTDJ33m4czWn_az3Gcey8Zb2GA7I8'
    }
})