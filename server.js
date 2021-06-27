const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const dotenv=require('dotenv');

const activitySchema=require("./models/activitySchema");

dotenv.config();
mongoose.connect(process.env.Database_access, ()=>console.log("database connected"));
app.use(cors());
app.use(express.json());
app.get("/", (req, res)=>{
    res.send("Hello There");
})
app.post("/addnew", (req, res)=>{
    const activities=req.body.activities;
    var count=req.body.count;
    activitySchema.updateOne({_id:"60d8521fde72740e3c66ac88"}, {$set:{activities:activities, count:++count}})
    .then(response=>{
        res.status(200).send("Activities added successfully");
    })
    .catch(err=>{
        res.status(404).send("Error in adding activity to database");
    })
})
app.get("/getData", (req, res)=>{
    // console.log(res);
    activitySchema.find({},(err, result)=>{
        if(err){
            res.status(404).send("Error");
        }else{
            console.log(result);
            res.status(200).send(result[0]);
        }
    })
})
app.listen(process.env.PORT||5000, ()=>{
    console.log("Server is started");
})