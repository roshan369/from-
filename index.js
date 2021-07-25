const express = require("express");
const app = express();
const router = require("./Router/From");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myapp", {useNewUrlParser:true},()=>{
    console.log("Connected to MONGOOSE")
});

app.use(express.json());
app.use("/api/From", router);

app.listen(5000,(req,res) => {
    console.log(`user is succfull is the way the man will be profiete ${5000}`)
});