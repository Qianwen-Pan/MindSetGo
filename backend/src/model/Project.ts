import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({

    id: String,
    projectName: String,
    description: String,
    remote: Boolean,
    projectLen: Number,
    priority: String,
    newSkill: Boolean,
    dailyMoodCheck: Boolean,
    startDate: Date,
    colaborators:[]
  });
  const Project = mongoose.model("Project", projectSchema)
  export default Project;