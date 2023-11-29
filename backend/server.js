
const dotenv=require("dotenv");
const connectDatabase=require("./config/database");
const express=require("express");
const morgan=require("morgan");
const authRoutes=require("./routes/authRoute")


//config

dotenv.config({path:"backend/config/config.env"})

//connect database
connectDatabase()

//rest object
const app=express();

//middleware
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth",authRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`server is working on ${process.env.PORT}`)
}); 