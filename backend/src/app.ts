require("dotenv").config();

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import session from "express-session";
import passport, { authenticate } from "passport";
import cors from "cors";
import User from "./model/User";
import { ensureAuthenticated } from "./midware/auth";
import Project from "./model/Project";
import { IUser } from "./model/User";

import Reource from "./model/Reource";
import Notification from "./model/Notification";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(
  session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

//database setting
const db_name = process.env.DB_NAME;
const db_password = process.env.DB_PASSWORD;

const url = `mongodb+srv://${db_name}:${db_password}@cluster0.iyauopq.mongodb.net/MindSetGo`;
mongoose
  .connect(url)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err: any) => console.log(err));

passport.use(User.createStrategy());

// passport.serializeUser((User as any).User.serializeUser());
passport.serializeUser((User as any).serializeUser());
passport.deserializeUser(User.deserializeUser());

//interface
interface ProjectDate {
  projectName: string;
  passTime: number;
}

app.get("/", ensureAuthenticated, (req: any, res: any) => {
  res.send("hello world");
});

app.get("/notifications", ensureAuthenticated, (req, res) => {
  const user = req.user;
});
app.post("/notifications", ensureAuthenticated, (req, res) => {
  const user = req.user;
});
app.get("/reources", ensureAuthenticated, (req, res) => {
  const user = req.user;
});

app.post("/resources", ensureAuthenticated, (req, res) => {

})

app.get("/projects", ensureAuthenticated, (req, res) => {
  const authedUser = req.user as IUser;
  console.log(authedUser);

  User.findById(authedUser.id).then((foundUser) => {
    const projectsofCurUser = foundUser?.projects;
    

    const currentDate = moment();
    let responseProjectDate: ProjectDate[] = [];
    if(projectsofCurUser){
      
      projectsofCurUser.map((project) => {
        responseProjectDate.push({
          projectName: project.projectName,
          passTime: currentDate.diff(project.startDate, "days")
        })
      });
      res.status(200).send({projects: responseProjectDate});
    }else{
      res.status(200).send({projects: []});
    }
    
    
  }).catch((e) => {
    console.log(`get project error: unable to find user`)
    res.status(400).send({message: "get project error: unable to find user"});
  });

});
app.post("/project", ensureAuthenticated, (req, res) => {
  
  const newProject = new Project({
    id: uuidv4(),
    projectName: req.body.projectName,
    remote: req.body.isRemote,
    projectLen: req.body.projectLen,
    priority: req.body.priority,
    newSkill: req.body.isNewSkillNeeded,
    dailyMoodCheck: req.body.dailyMoodCheck,
    startDate: moment(req.body.startDate).format("YYYY-MM-DD"),
  });

  newProject
    .save()
    .then(() => console.log("project have saved"))
    .catch((e) => console.log(`project not saved ${e}`));

  const authedUser = req.user as IUser;
  User.findById(authedUser.id)
    .then((foundUser) => {
      foundUser?.projects?.push(newProject);

      foundUser
        ?.save()
        .then(() => {
          res.status(200).send({
            message: `project has saved under this user ${authedUser.username}`,
          });
        })
        .catch((e) => {
          console.log(
            `project has saved under this user ${authedUser.username}. error: ${e}`
          );
          res.status(400).send({
            message: `project has saved under this user ${authedUser.username}. error: ${e}`,
          });
        });
    })
    .catch((e) => {
      console.log("user not found");
      res.status(400).send({ message: "user not found" });
    });
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = new User({
    username: username,
    password: password,
  });
  User.register(user as IUser, password)
    .then((user) => {
      if (!user) {
        res.status(500).send("Error registering user");
      } else {
        console.log(user);
        passport.authenticate("local")(req, res, () => {
          res.status(200).send({ message: "successfully created", user: user });
        });
      }
    })
    .catch((e) => {
      console.log(`user can't register because error happened: ${e}`);
      res.status(409).send({ error: e });
    });
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = new User({
    username: username,
    password: password,
  });
  req.login(user, function (err: any) {
    if (err) {
      console.log(`login failed ${err}`);
      res.status(500).send("Error logining user");
    } else {
      passport.authenticate("local")(req, res, () => {
        //passport.authenticate("local") return a function
        console.log(user);
        res.status(200).send({ message: "successfully logined" });
      });
    }
  });
  // console.log(req.user);
});
app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      console.log(`logout failed ${err}`);
    }
    res.redirect("/");
  });
});

app.listen(5001, () => {
  console.log("server is working");
});
