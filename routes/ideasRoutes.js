const express = require("express");
const router = express.Router();
const Idea = require("../models/ideaModel");

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
        idea_text: req.body.idea_text,
        type: req.body.type
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

router.delete('/:id', async (req, res) => {
    try {
        console.log("req", req.params.id);
        Idea.findByIdAndDelete(req.params.id)
            .then((response) => {
                console.log("res", response);
                res.status(200);
                res.send(res.body);
            })
            .catch((e) => {
                res.status(401);
                res.send(res.body);
                console.log(e);
            });
    }
    catch (e) {
        res.status(400);
        res.send("fail");
    }
})



module.exports = router;