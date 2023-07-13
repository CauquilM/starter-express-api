const mongoose = require("mongoose");

const ideaSchema = new mongoose.Schema({
    idea_text:{
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Idea", ideaSchema)