import express from "express";
import passport from 'passport';
import "dotenv/config";
import router from "./Routes/Routes.js";
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import dbConnect from "./DB/dbConnenct.js"

const app=express();
const port=process.env.PORT||3000;
await dbConnect();


app.use("/",router);

app.listen(port,()=>{
  console.log(`running on port ${port}`);
});

export default app;
