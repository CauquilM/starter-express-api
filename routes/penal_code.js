const express = require("express");
const router = express.Router();
const Laws = require("../models/laws");

router.get('/', async (req, res) => {
    console.log("Just got a GET requst!")
    try {
        const laws = await Laws.find();
        console.log(`laws: ${console.log(JSON.stringify(laws))}`);
        res.json(laws);
    }
    catch(err){
        res.send({message: err.message})
    }
})

router.post('/', async (req, res) => {
    console.log(req.body);
    const lawsBook = new Laws({
        penal_code: req.body.penal_code,
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