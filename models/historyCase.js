const mongoose = require("mongoose");

const historyCaseSchema = new mongoose.Schema({
    age: {
        type: Number,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("HistoryCases", historyCaseSchema)