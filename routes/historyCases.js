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
})

router.post('/appeal', async (req, res) => {
    console.log(`Just got a GET requst! ${req.body.suspect_name}`)
    try {
        const appealCase = await HistoryCases.findOne({
            suspect_name: req.body.suspect_name
        });
        res.json(appealCase);
    }
    catch(err){
        res.send({message: err.message})
    }
})

router.post('/', async (req, res) => {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1; // Note: Month is zero-based, so add 1
    let year = currentDate.getFullYear();
    let formattedDate = `${day}/${month}/${year}`;

    console.log(req.body);
    const temporarCase = new HistoryCases({
        case_id: req.body.case_id,
        type: req.body.type,
        charge: req.body.charge,
        description: req.body.description,
        suspect_name: req.body.suspect_name,
        suspect_age: req.body.suspect_age,
        criminalRecord: req.body.criminalRecord,
        evidences: req.body.evidences,
        verdict: req.body.verdict,
        prison: req.body.prison,
        probation: req.body.probation,
        fine: req.body.fine,
        date_judgement: formattedDate
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

router.delete('/', async (req, res) => {
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
})



module.exports = router;