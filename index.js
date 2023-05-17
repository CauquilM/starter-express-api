const express = require('express');
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();


mongoose.set('strictQuery', true);

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
app.get('/', (req, res) => {
    console.log("Just got a GET requst!")
    res.send({
        name: "Doudou", type: "criminal", charge: "love"
    });
})
app.all('/', (req, res) => {
    console.log("Just got a POST request!")
    res.send('Yo Mas, I received your dat!')
})
app.listen(process.env.PORT || 3000)