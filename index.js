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

function ignoreFavicon(req, res, next) {
    if (req.originalUrl.includes('favicon.ico')) {
      res.status(204).end()
    }
    next();
  }

  app.use(ignoreFavicon);

const historyCases = require("./routes/historyCasesRoutes");
const ideas = require("./routes/ideasRoutes");
const laws = require("./routes/lawsRoutes");
const prisons = require("./routes/prisonsRoutes");

app.use("/history", historyCases);
app.use("/ideas", ideas);
app.use("/laws", laws);
app.use("/prisons", prisons);
app.get("/", (req, res) => res.send("coucou test"));

app.listen(process.env.PORT || 3000);