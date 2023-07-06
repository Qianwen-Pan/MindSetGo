
import mongoose, { Document } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

export interface IUser extends Document {
    username: string;
    password: string;
    projects?: any[]; // 
    notification?: any[]; // 
    resources?: any[]; 
}
const userSchema = new mongoose.Schema({
  
  email: String,
  password: String,
  projects: [],
  notification: [],
  resources: []
  
});
userSchema.plugin(passportLocalMongoose);
const User = mongoose.model<IUser>("User", userSchema);
export default User;

