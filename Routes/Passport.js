// auth/passport.js
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import dotenv from 'dotenv';
import UserModel from '../DB/models/userModel.js';

dotenv.config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.HOST+"/auth/google/callback",
    passReqToCallback: true,
  },
  async (request, accessToken, refreshToken, profile, done) => {
    // Replace with database logic as needed
    try {
      let user=await UserModel.findOne({google_id:profile.id});
      if(!user){
        user=new UserModel({
          name:profile.displayName,
          email:profile.email,
          google_id:profile.id,
          photo:profile.picture,
        });
        await user.save();
      }
      return done(null,user,{ accessToken, refreshToken });
    } catch (error) {
      return done(error,null);
    }
    
    console.log(profile);
    return done(null, user, { accessToken, refreshToken });
  }
));

export default passport;
