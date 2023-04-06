const express=require("express");
const {connection}= require("./configs/db");
const { userRouter } = require("./routes/User.route");
const { appointRouter } = require("./routes/Appoint.route");
require("dotenv").config();
const cors=require("cors");




const app = express();
app.use(cors({
    origin: "*"
}))
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Home page");

})

app.use("/users",userRouter);
app.use("/appointments",appointRouter);

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("Connected to The DataBase");
    } catch(err){
        console.log("Problem when Connection");
        console.log(err)
    }
    console.log(`running at port number ${process.env.port}`);
})

