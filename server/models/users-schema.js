//jshint: esverson 6

const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    name: String,
    email: String
    
}, {collection: "users"})

module.exports = mongoose.model("User", userSchema)