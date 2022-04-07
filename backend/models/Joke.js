const mongoose = require('mongoose');

// Defining Schema
const jokeSchema = new mongoose.Schema({
    noidung: { type: String, required: true, trim: true },
    ma: { type: String, required: true, trim: true },
    bauchon: {
        vui: {
            type: Number,
            default: 0,
        },
        khongvui: {
            type: Number,
            default: 0,
        }
    }
})

// Model 
const JokeModel = mongoose.model("joke", jokeSchema)

module.exports = JokeModel;