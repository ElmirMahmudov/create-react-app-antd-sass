import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

class PostServices {
    static getPosts = () => {
        return axios.get(`${BASE_URL}/posts`);
    }
}

export default PostServices;