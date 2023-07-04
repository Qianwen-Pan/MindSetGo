import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({

    id: String,
    name: String,
    type: String,
    
  });
  const Notification = mongoose.model("Project", notificationSchema)
  export default Notification;