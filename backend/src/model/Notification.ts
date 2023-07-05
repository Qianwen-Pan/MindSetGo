import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({

    id: String,
    content: String,
    title: String,
    time: Date
    
  });
  const Notification = mongoose.model("Notification", notificationSchema)
  export default Notification;