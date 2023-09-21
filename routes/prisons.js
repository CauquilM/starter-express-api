const express = require("express");
const router = express.Router();
const Prisons = require("../models/prison");

router.get('/', async (req, res) => {
    console.log("Just got a GET requst!")
    try {
        const prisons = await Prisons.find();
        res.json(prisons);
    }
    catch(err){
        res.send({message: err.message})
    }
})

router.post('/', async (req, res) => {
    console.log(req.body);
    const temporarPrison = new Prisons({
        prison: req.body.prison,
        prison_name: req.body.prison_name,
        max_size: req.body.max_size
    })

    try {
        const newPrison = await temporarPrison.save();
        res.status(200);
        res.send(newPrison);
    }
    catch (e) {
        res.status(400);
        res.send("fail");
    }
})

/*router.delete('/', async (req, res) => {
   try {
       HistoryCases.deleteMany({})
           .then((response) => {
               console.log(response);
           })
           .catch((e) => {
               console.log(e);
           });
       res.status(200);
       res.send(res.body);
   }
   catch (e) {
       res.status(400);
       res.send("fail");
   }
})*/



module.exports = router;