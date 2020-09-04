const mongoose = require("mongoose")

const tiktokSchema = mongoose.Schema({
    url:String,
    channel:String,
    song:String,
    likes:String,
    messages:String,
    description:String,
    shares:String,
});

//coolection inside the Database
module.exports =  mongoose.model("Videos", tiktokSchema )