import axios from 'axios';

require('dotenv').config();

const API_KEY = '';

export default {

    getBooks: () => {

        return axios.get('/api/books');

    },

    getBook: (id) => {

        return axios.get('/api/books/' + id);

    },

    deleteBook: (id) => {

        return axios.delete('/api/books/' + id);

    },
    
    saveBook: (bookData) => {

        console.log('bookData: ')
        console.log(bookData)
        return axios.post('/api/books', bookData);

    },

    searchBook: (bookData) => {

        console.log(bookData)
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookData}&key=${API_KEY}`);

    }

};