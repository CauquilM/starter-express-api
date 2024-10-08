const express = require("express");
const router = express.Router();
const Laws = require("../models/lawsModel");

router.get('/', async (req, res) => {
    console.log("Just got a GET requst!")
    try {
        const laws = await Laws.find();
        res.json(laws);
    }
    catch(err){
        res.send({message: err.message})
    }
})

router.post('/', async (req, res) => {
    console.log(req.body);
    const lawsBook = new Laws({
        offense: req.body.offense,
    })
    try {
        const law = await lawsBook.save();
        res.status(200);
        res.send(law);
    }
    catch (e) {
        res.status(400);
        res.send(`fail ${e}`);
    }
})

module.exports = router;