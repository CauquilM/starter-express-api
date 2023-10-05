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
        max_size: req.body.max_size,
        date_sentence_updated: new Date().toLocaleDateString('en-US')
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

router.put('/refreshSentences', async (req, res) => {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1; // Note: Month is zero-based, so add 1
    let year = currentDate.getFullYear();
    let formattedDate = `${day}/${month}/${year}`;

    try {
        console.log(`prison: ${req.body.prison_name}`);

        // Check if the stored date is not equal to the current date
        const prison = await Prisons.findOne({prison_name: req.body.prison_name});
        console.log("prison: " + prison.prison[0].prison);
        if (!prison || prison.date_sentence_updated !== formattedDate) {
            // Update the date_sentence_updated only if it's different
            await Prisons.updateOne(
                {prison_name: req.body.prison_name},
                {$set: {date_sentence_updated: formattedDate}}
            );

            console.log("Prison updated successfully");
            res.status(200).send("Prison date update");
        } else {
            console.log("Prison date is already up to date");
            res.status(200).send("Prison date is already up to date");
        }
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

router.put('/emptyPrison', async (req, res) => {
    try {
        console.log(`prison: ${req.body.prison_name}`);
        await Prisons.updateOne(
            {prison_name: req.body.prison_name},
            {$set: {prison: []}}
        );
        console.log("Prison updated successfully");
        res.status(200).send("Success to fill prison");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

router.put('/deathPenalty', async (req, res) => {
    try {
        const prisonName = req.body.prison_name;
        const inmateName = req.body.inmate_name;

        console.log(prisonName + ' / ' + inmateName);

        const updateResult = await Prisons.updateOne(
            {prison_name: prisonName, "prison.suspect_name": inmateName},
            {$pull: {prison: {suspect_name: inmateName}}}
        );
        console.log("Inmate removed from prison successfull");
        res.status(200).send("Inmate removed from prison successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;