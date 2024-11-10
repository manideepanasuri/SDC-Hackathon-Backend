import express from "express";
import passport from 'passport';
import "dotenv/config";
import router from "./Routes/Routes.js";
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import dbConnect from "./DB/dbConnenct.js"
import cors from "cors"

const app=express();
app.use(express.json());
const port=process.env.PORT||3000;
await dbConnect();
app.use(cors());


app.use("/",router);

app.listen(port,()=>{
  console.log(`running on port ${port}`);
});

export default app;
