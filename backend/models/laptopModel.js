const mongoose=require("mongoose")

const LaptopSchema=mongoose.Schema({
    productName:{
        type:String,
        required:[true,"Please enter your name"]
    },
    description:{
        type:String,
        required:[true,"Please enter product description"]
    },
    price:{
        type:Number,
    },
    screen:{
        type:String,
        
    },
    image: {
        data: Buffer,
        contentType: String,
    },

    category:{
        type:String,
        required:[true,"enter product category"]
    },
    cpu:{
        type:String,
        
    },
    ram:{
        type:String,
        default:0
    },
    storage:{
        type:String
    }

    
    
    

})



module.exports=mongoose.model("laptop",LaptopSchema)