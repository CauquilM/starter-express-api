const express = require("express");
const router = express.Router();
const Idea = require("../models/idea");

router.get('/', async (req, res) => {
    console.log("Just got a GET requst!")
    try {
        const ideas = await Idea.find();
        res.json(ideas);
    }
    catch(err){
        res.send({message: err.message})
    }
})

router.post('/', async (req, res) => {
    console.log(req.body);
    const temporarIdea = new Idea({
        idea_text: req.body.idea_text
    })

    try {
        const newIdea = await temporarIdea.save();
        res.status(200);
        res.send(newIdea);
    }
    catch (e) {
        res.status(400);
        res.send("fail");
    }
})

router.delete('/', async (req, res) => {
    try {
        Idea.deleteMany({})
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