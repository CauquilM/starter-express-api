const express = require("express");
const router = express.Router();
const Prisons = require("../models/prison");

router.get('/', async (req, res) => {
    console.log("Just got a GET requst!")
    try {
        const prisons = await Prisons.find();
        res.json(prisons);
    } catch (err) {
        res.send({message: err.message})
    }
})

router.post('/', async (req, res) => {
    console.log(req.body);
    const temporarPrison = new Prisons({
        prison: req.body.prison,
        prison_name: req.body.prison_name,
        prison_type: req.body.prison_type,
        max_size: req.body.max_size
    })

    try {
        const newPrison = await temporarPrison.save();
        res.status(200);
        res.send(newPrison);
    } catch (e) {
        res.status(400);
        res.send("fail");
    }
})
router.put('/', async (req, res) => {
    try {
        console.log(`prison: ${req.body.prison_name}`);
        await Prisons.updateOne(
            {prison_name: req.body.prison_name},
            {$set: {prison: req.body.inmates}}
        );
        console.log("Prison updated successfully");
        res.status(200).send("Success to fill prison");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

router.put('/addInmate', async (req, res) => {
    try {
        console.log(`prison: ${req.body.prison_name}`);
        await Prisons.updateOne(
            {prison_name: req.body.prison_name},
            {$push: {prison: req.body.inmate}}
        );
        console.log("Prison updated successfully");
        res.status(200).send("Success to fill prison");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

router.put('/empty', async (req, res) => {
    try {
        console.log(`prison: ${req.body.prison_name}`);
        await Prisons.updateOne(
            {prison_name: req.body.prison_name},
            {$: {prison: []}}
        );
        console.log("Prison updated successfully");
        res.status(200).send("Success to fill prison");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

router.put('/kill', async (req, res) => {
    try {
        const prisonName = req.body.prison_name;

        const updateResult = await Prisons.updateOne(
            {prison_name: prisonName},
            {$pull: {prison: {name: req.body.inmate_name}}}
        );
        console.log("Inmate removed from prison successfully");
        res.status(200).send("Inmate removed from prison successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});


module.exports = router;