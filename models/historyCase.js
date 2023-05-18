const mongoose = require("mongoose");

const historyCaseSchema = new mongoose.Schema({
    type: {
      type: String,
      required: true
    },
    charge: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    suspect_name: {
        type: String,
        required: true
    },
    suspect_age: {
        type: String,
        required: true
    },
    criminalRecord: {
        type: Array,
        required: true
    },
    verdict: {
        type: String,
        required: true
    },
    prisonSentence: {
        type: String,
        required: true
    },
    probationSentence: {
        type: String,
        required: true
    },
    fineSentence: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("HistoryCases", historyCaseSchema)