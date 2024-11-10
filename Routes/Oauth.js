// auth/googleAuth.js
import express from 'express';
import passport from './Passport.js';
import jwt from "jsonwebtoken";

const router = express.Router();

// Route to initiate Google OAuth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Callback route to handle Google's response
router.get('/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/google/failure' }),
  (req, res) => {
    const token=jwt.sign({
      success:true,
      message: 'Authentication successful',
      user: req.user,
      accessToken: req.authInfo.accessToken,
      refreshToken: req.authInfo.refreshToken,
    },process.env.JWT_SECRET);
    res.redirect(process.env.CLIENT_URL+`?token=${token}`);   
  }
);
router.get('/google/failure',(req,res)=>{
  res.json({
    success:false
  })
})

export default router;
