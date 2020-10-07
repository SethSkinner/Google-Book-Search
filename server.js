const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));

app.use(express.json());

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));

}

app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

app.listen(PORT, function() {

    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);

});