import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
const userSchema = new mongoose.Schema({
  id: String,
  email: String,
  password: String,
  projects: [],
});
userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", userSchema);
export default User;