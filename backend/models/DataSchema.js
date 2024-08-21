const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    PCOM: { type: String, required: true },
    PLOC: { type: String, required: true },
    PMVMNT: { type : Number, required: true },
    PONHND: { type: Number, required: true },
    PPDESC: { type: String, required: true },
    PPROD: { type: String, required: true },
    PSIZE: { type: String, default: "" },
    PUM: { type: String, required: true },
    PUSAGE: { type: Number, required: true },
    dateAdded: { type: Date, default: Date.now },
    fileName: { type: String, required: true },
})

module.exports = mongoose.model('Data', DataSchema)