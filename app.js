const express=require("express")
const mongoose=require(mongoose)
const cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello")
})

app.get("/view",(req,res)=>{
    res.send("welcome")
})

app.listen(8080,()=>{
    console.log("server started")
})