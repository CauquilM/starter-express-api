const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();


mongoose.set('strictQuery', true);

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});

app.use(cors());
app.use(bodyParser.json());

const historyCases = require("./routes/historyCases");
const ideas = require("./routes/ideas");

app.use("/history", historyCases);
app.use("/ideas", ideas);

app.listen(process.env.PORT || 3000);