
const { default: mongoose } = require("mongoose")
const laptopModel = require("../models/laptopModel")
exports.getLaptopList=(req,res)=>{
    mongoose.connection.db.collection("laptopModel",(err,data)=>{
        data.find().toArray((err,data)=>{
            if(err) console.log(err)
            else{
        console.log(data)}

        })

    })
    

    }
