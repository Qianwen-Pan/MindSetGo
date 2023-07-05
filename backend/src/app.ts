require("dotenv").config();

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import session from "express-session";
import passport from "passport";
import cors from 'cors';
import User from "./model/User"
import { ensureAuthenticated } from "./midware/auth";

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

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", ensureAuthenticated,(req: any, res: any) => {
  res.send("hello world");
});
app.get("/reources", ensureAuthenticated, (req, res) => {
  res.send("hello world");
});


app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.register({ username: username }, password)
    .then((user) => {
      if (!user) {
        res.status(500).send("Error registering user");
      } else {
        console.log(user);
        passport.authenticate("local")(req, res, () => {
          res.status(200).send({message: "successfully created", user: user});
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
        res.status(200).send({message: "successfully logined"});
        
      });
    }
  });
});

app.listen(5001, () => {
  console.log("server is working");
});
