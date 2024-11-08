import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  google_id:{
    type:String,
    require:true,
    unique:true,
  },
  photo:{
    type:String
  }
});

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;