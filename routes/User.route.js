const express=require("express");
const {UserModel} = require("../models/User.model");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
require("dotenv").config();

const userRouter=express.Router();

userRouter.get("/",async(req,res)=>{
    try{
        const users= await UserModel.find();
        res.send(users);
    } catch(err){
        console.log(err);
        res.send({"msg":"something went wrong"});
    }
})

userRouter.get("/register",async(req,res)=>{
    const {email,password,conpassword}= req.body
    try{
        bcrypt.hash(password,5,async(err,sec_password)=>{
            if(err){
                console.log(err);
            }
            else{
                const user = new UserModel({email,password:sec_password,conpassword})
                await user.save();
                res.send({"msg":"User Registered Successfully"});
            }
        })
    }
    catch(err){
        res.send({"msg":"Something went wrong when Registering"});
        console.log(err);
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body
    console.log(email,password);
    try{
        const user = await UserModel.find({email})
        const hased_password = user[0].password
        if(user.length>0){
            bcrypt.compare(password,hased_password,(err,result)=>{
                if(result){
                    const token= jwt.sign({ userID:user[0]._id}, process.env.key);
                    res.send({"msg":"Login Successfully","token":token})
                } else {
                    res.send({"msg":"Wrong Credentials"})
                }
            })
        }
        else {
            res.send({"msg":"Wrong Credentials"})
        }
    }
    catch(err){
        res.send({"msg":"Something went wrong when Login"});
        console.log(err);
    }
})

module.exports={
    userRouter
}