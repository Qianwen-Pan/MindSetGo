import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({

    id: String,
    name: String,
    remote: Boolean,
    projectLen: Number,
    priority: String,
    newSkill: Boolean,
    dailyMoodCheck: Boolean,
    startDate: Date,
    notification: [],
    resource: [],
    colaborators:[]
  });
  const Project = mongoose.model("Project", projectSchema)