const DBString = require("../constants/DBConnect");

const mongoose = require("mongoose");

const connectDB = async () =>{
    await mongoose.connect(DBString);
}

module.exports = connectDB;