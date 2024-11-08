import express from "express";
import authRouter from "./Oauth.js"

const router=express.Router();

router.use("/auth",authRouter);


export default router;

