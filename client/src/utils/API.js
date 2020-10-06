import axios from 'axios';

require('dotenv').config();

const API_KEY = '';

export default {

    getBooks: () => {

        return axios.get('/api.books');

    }

}