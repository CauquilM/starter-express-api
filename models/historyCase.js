const mongoose = require("mongoose");

const historyCaseSchema = new mongoose.Schema({
    case_id:{
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    charge: {
        type: String,
        required: true
    },
    evidences: {
        type: Array,
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
    prison: {
        type: String
    },
    probation: {
        type: String
    },
    fine: {
        type: String
    },
    date_judgement: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("HistoryCases", historyCaseSchema)