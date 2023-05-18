const mongoose = require("mongoose");

const historyCaseSchema = new mongoose.Schema({
    charge: {
        type: String,
        required: true
    },
    criminalRecord: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    evidences: {
        type: Array,
        required: true
    },
    suspect: {
        type: Object,
        required: true
    },
    verdict: {
        type: String
    }
})

module.exports = mongoose.model("HistoryCases", historyCaseSchema)