const express=require("express");
const {AppointModel} = require("../models/Appoint.model");
require("dotenv").config();

const appointRouter=express.Router();

appointRouter.get("/",async(req,res)=>{
    try{
        const appointments= await AppointModel.find();
        res.send(appointments);
    } catch(err){
        console.log(err);
        res.send({"msg":"something went wrong"});
    }
})

appointRouter.post("/create",async(req,res)=>{
    const payload=req.body;
    try{
        const new_appoint= new AppointModel(payload)
        await new_appoint.save()
        res.send("Apponted Created Successfully");
    } catch(err){
        res.send({"msg":"something went wrong"});
        console.log(err);
    }
})



module.exports={
    appointRouter
}