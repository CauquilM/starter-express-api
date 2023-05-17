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



module.exports = router;