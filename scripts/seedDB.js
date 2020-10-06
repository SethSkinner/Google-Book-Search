const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(

    process.env.MONGODB_URI || 'mongodb://localhost/googlebooks'

);

const bookSeed = [

    {

        title: '',
        author: '',
        thumbnail: '',
        href: '', 
        description: '',
        date: new Date(Date.now())

    },

    {

        title: '',
        author: '',
        thumbnail: '',
        href: '', 
        description: '',
        date: new Date(Date.now())

    },

];

db.Book 
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {

        console.log(data.result.n + ' book data inserted!');
        process.exit(0);

    })
    .catch(err => {

        console.error(err);
        process.exit(1);

    });