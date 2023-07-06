
import mongoose, { Document } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

export interface IUser extends Document {
    username: string;
    // email?: string;
    password: string;
    projects?: any[]; // Replace any with your Project type if you have one
    notification?: any[]; // Replace any with your Notification type if you have one
    resources?: any[]; // Replace any with your Resource type if you have one
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

//   User.findById(user.id).then((foundUser) => {
//     foundUser.secret = req.body.secret;
//     foundUser.save().then(() => {
//         res.redirect("/secrets");
//     }).catch((e) => console.log(`Submit: secret not saved : ${e}`));
// }).catch((e) => console.log(`submit failed: ${e}`));


// User.findById(authedUser.id)
  // const newProject = new Project({
  //   id: uuidv4(),
  //   projectName: req.body.projectName,
  //   remote: req.body.isRemote,
  //   projectLen: req.body.projectLen,
  //   priority: req.body.priority,
  //   newSkill: req.body.isNewSkillNeeded,
  //   dailyMoodCheck: req.body.dailyMoodCheck,
  //   startDate: req.body.startDate,
  // });

  // newProject.save();