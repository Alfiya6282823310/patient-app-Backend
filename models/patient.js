const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":String,
        "age":Number,
        "Adress":String,
        "doctor":String
    }
)
let patientmodel=mongoose.model("patient",schema);
module.exports={ patientmodel}