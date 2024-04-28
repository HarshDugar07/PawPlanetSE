import express from "express";
import {config} from "dotenv";
import { dbConnection } from "./dbConnect/dbConnection.js";
import messageRouter from "./routes/messageRouter.js";
import cors from 'cors';
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRouter.js";





const app=express();
config({path:"./config/config.env"});
app.use(
  cors({
    origin:[process.env.FRONTEND_URL,process.env.FRONTEND_URL_TWO],
    method:["GET","POST","DELETE","PUT"],
    credentials:true,
  })
)

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// Use the messages routes
app.use('/api/message', messageRouter);
app.use("/api/user", userRouter);
dbConnection();

export default app;