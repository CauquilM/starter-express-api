const mongoose = require("mongoose");

const lawsSchema = new mongoose.Schema({
    offenses: {
        type: Object,
        required: true
    }
})

module.exports = mongoose.model("Laws", lawsSchema)