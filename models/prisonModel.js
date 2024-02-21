const mongoose = require("mongoose");

const prisonSchema = new mongoose.Schema({
    prison: {
        type: Array,
        required: true
    },
    prison_name: {
        type: String,
        required: true
    },
    prison_type: {
      type: String,
      required: true
    },
    max_size: {
        type: Number,
        required: true
    },
    date_sentence_updated: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Prisons", prisonSchema)