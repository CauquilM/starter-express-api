const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();


mongoose.set('strictQuery', true);

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});

app.use(cors());

const routes = require("./routes/historyCases");

app.use("/history", routes);

app.listen(process.env.PORT || 3000)