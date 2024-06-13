const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":"",
        "age":"",
        "Adress":"",
        "doctor":"",
    }
)
let patientmodel=mongoose.model("patient",schema)
module.exports={ patientmodel}