const mongoose = require("mongoose");

const historyCaseSchema = new mongoose.Schema({
    case_id:{
      type: Number,
      default: Math.floor(Math.random() * (99999 - 1000 + 1)) + 1000
    },
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
        type: String
    },
    probationSentence: {
        type: String
    },
    fineSentence: {
        type: String
    }
})

module.exports = mongoose.model("HistoryCases", historyCaseSchema)