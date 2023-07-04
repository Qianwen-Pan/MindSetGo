import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    id: String,
    email: String,
    password: String,
    projects: [],
  });

  const User = mongoose.model("User", userSchema);
