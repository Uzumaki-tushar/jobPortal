import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.routes.js"
import companyRoute from "./routes/company.routes.js";
import jobRoute from "./routes/job.routes.js";
import applicationRoute from "./routes/application.routes.js";
dotenv.config({});
const app= express();


// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions={
    origin:["http://localhost:5173"],
    credentials:true,
};

app.use(cors(corsOptions));

// apis
// "http:localhost:5011/api/users/register || login || profileupdate"

app.use("/api/users",userRoute);
app.use("/api/company",companyRoute);
app.use('/api/job',jobRoute);
app.use('/api/application',applicationRoute);

const PORT=process.env.PORT || 5001;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});