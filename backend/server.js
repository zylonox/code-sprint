
const dotenv=require("dotenv");
const connectDatabase=require("./config/database");
const express=require("express");
const morgan=require("morgan");
const authRoutes=require("./routes/authRoute");
const cors=require("cors");
const displayRoute=require("./routes/displayRoute")


//config

dotenv.config({path:"backend/config/config.env"})

//connect database
const mongoose = require("mongoose");
mongoose
	.connect(process.env.DB_URL, {
		
	})
	.then(() => {
		console.log("MONGODB CONNECTION ESTABLISHED SUCCESSFULLY");
	});


//rest object
const app=express();

//middleware
app.use(cors())
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1",displayRoute);

app.listen(process.env.PORT,()=>{
    console.log(`server is working on ${process.env.PORT}`)
}); 