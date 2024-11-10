import express from "express";
import authRouter from "./Oauth.js"
import verifyjwt from "./verifyjwt.js";

const router=express.Router();
// http://localhost:3000/auth/google end pint to register
router.use("/auth",authRouter);

router.post("/verifyjwt",verifyjwt);

export default router;

