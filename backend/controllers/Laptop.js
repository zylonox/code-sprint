const Laptop = require("../models/Laptop");

async function getAllLaptops(req, res) {
    try {
        const data = await Laptop.find();
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

async function searchContoller(req,res){
    try {
        const {keyword} = req.params
        const result =await LaptopSchema.find({
            $or : [
                {productName:{$regex : keyword, $options:"i"}},
                {description:{$regex : keyword, $options:"i"}},
                {cpu:{$regex : keyword, $options:"i"}},
                {ram:{$regex : keyword, $options:"i"}},
                {storage:{$regex : keyword, $options:"i"}},
                {price:{$regex : keyword, $options:"i"}},
            ]
        }).select("-photo")
        res.json(results)
        
    } catch (error) {
        console.log(error)
        res.status(400).send({
            success:false,
            message:"error in search",
            error 
        })
        
    }
}

module.exports = { getAllLaptops,searchContoller};