const express = require("express")
const mongoose = require("mongoose")
const Data = require("./data.js")
const Videos = require("./dbModel.js")
const dotenv = require('dotenv');
dotenv.config()


// App Config
const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use((req,res,next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*")
    next()
})

// DB Config

mongoose.connect(process.env.MongoUri, { useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true } )
.then(()=> console.log("Mongoo DB Connected..."))
.catch(err => console.error(err))

//api endpoint
app.get("/", (req,res) =>{
    res.status(200).send("Hello World")
})


app.get("/v1/posts", (req,res) =>{
    res.status(200).send(Data)
})


app.get("/v2/posts", (req,res) =>{
    Videos.find((err,data) =>{
        if(err){
            res.status(500).send(err)
        } else{
            res.status(200).send(data)
        }
    })
})

app.post("/v2/posts", (req,res) =>{
    const dbVideos = req.body
    Videos.create(dbVideos, (err, data) =>{
        if(err){
            res.status(500).send(err)
        } else{
            res.status(201).send(data)
        }
    })
    
})
//listen
app.listen(port, () => console.log(`listening on localhost:${port}`));