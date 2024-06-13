const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {patientmodel}=require("./models/patient")

const app=express()
app.use(cors())
app.use(express.json())

 mongoose.connect("mongodb+srv://alfiyakn:alfiyakn@cluster0.l8relji.mongodb.net/patientdb?retryWrites=true&w=majority&appName=Cluster0")
// add
app.post("/",(req,res)=>{
    let input=req.body
    let patients=new  patientmodel(input)
    patients.save()
    console.log(patients)
    res.json({"status":"success"})
})
// view
app.post("/view",(req,res)=>{
    patientmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})
// SERCH
app.post("/search",(req,res)=>{
    let input=req.body
    patientmodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})
// DELETE
app.post("/delete",(req,res)=>{
    let input=req.body
    patientmodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
        }
    ).catch(
        (error)=>{
            res.json({"status":"error"})
        }
    )
})

app.listen(8080,()=>{
    console.log("server started")
})