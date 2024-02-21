const mongoose = require("mongoose");

const lawsSchema = new mongoose.Schema({
    penal_code: {
        type: Object,
        required: true
    }
})

module.exports = mongoose.model("Laws", lawsSchema)