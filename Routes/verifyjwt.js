import jwt from "jsonwebtoken"
import dotenv from 'dotenv';
dotenv.config();

export default async function verifyjwt(req,res) {
  let token=req.body.token;
  try {
    let data=jwt.verify(token,process.env.JWT_SECRET);
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success:false
    })
  }
}