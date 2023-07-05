import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema({

    id: String,
    title: String,
    content: String
  });
  const Reource = mongoose.model("Resource", resourceSchema)
  export default Reource;