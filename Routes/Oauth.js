// auth/googleAuth.js
import express from 'express';
import passport from './Passport.js';

const router = express.Router();

// Route to initiate Google OAuth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Callback route to handle Google's response
router.get('/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/' }),
  (req, res) => {
    // Send tokens and user info as JSON after successful authentication
    console.log("hiiii");
    res.json({
      message: 'Authentication successful',
      user: req.user,
      accessToken: req.authInfo.accessToken,
      refreshToken: req.authInfo.refreshToken,
    });
  }
);

export default router;
