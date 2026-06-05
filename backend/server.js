require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Feedback = require("./models/Feedback");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.post("/add", async(req,res)=>{
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.json({message:"Feedback Added"});
});

app.get("/all", async(req,res)=>{
    const data = await Feedback.find();
    res.json(data);
});

app.listen(5000, ()=>{
    console.log("Server Running");
});