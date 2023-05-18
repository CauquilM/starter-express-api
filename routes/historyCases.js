const express = require("express");
const router = express.Router();
const HistoryCases = require("../models/historyCase");

router.get('/', async (req, res) => {
    console.log("Just got a GET requst!")
    try {
        const cases = await HistoryCases.find();
        res.json(cases);
    }
    catch(err){
        res.send({message: err.message})
    }
    /*res.send([
        {age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
        {age: 15, first_name: 'Shadow', last_name: 'Poupoune'},
        {age: 22, first_name: 'Louis', last_name: 'XVI'}
    ])*/
})

router.post('/', async (req, res) => {
    console.log(req.body);
    const temporarCase = new HistoryCases({
        type: req.body.type,
        charge: req.body.charge,
        description: req.body.description
        suspect_name: req.body.suspect_name,
        suspect_age: req.body.suspect_age,
        criminalRecord: req.body.criminalRecord
        verdict: req.body.verdict,
        prisonSentence: req.body.prisonSentence,
        probationSentence: req.body.probationSentence
        fineSentence: req.body.fineSentence
    })
    
    try {
        const newCase = await temporarCase.save();
        res.status(200);
        res.send(newCase);
    }
    catch (e) {
        res.status(400);
        res.send("fail");
    }
})



module.exports = router;