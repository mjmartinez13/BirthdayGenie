const express    = require("express");
const authRoutes = express.Router();
const User       = require("../models/user-model.js");
const bcrypt     = require("bcrypt");



authRoutes.get('/signup', (req, res, next) => {
  res.render('auth/signup.ejs');
});


authRoutes.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username === "" || password === "") {
    res.render("auth/signup.ejs", { errorMessage: "Please indicate username and password" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.render("auth/signup.ejs", { errorMessage: "The username already exists" });
      return;
    }

    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser =  User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: username,
      encryptedPassword: hashPass
    });

    newUser.save((err) => {
      if (err) {
        res.render("auth/signup.ejs", { errorMessage: "Something went wrong" });
      } else {
        res.render('home-page/index.ejs');
      }
    });
  });
});

const passport = require('passport');

authRoutes.get('/login', (req, res, next) => {
  res.render('auth/login.ejs', {
    errorMessage: req.flash('error')
  });
});

authRoutes.post('/login',
  passport.authenticate('local', {
    successReturnToOrRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true,
    successFlash: 'You have been logged in, user!',
    passReqToCallback: true
  })
);

authRoutes.get('/logout', (req, res) => {
  req.logout();
  req.flash('success', 'You have been logged out');
  res.render('auth/login', {
    logoutMessage: req.flash('success')
  });
});

authRoutes.get("/auth/facebook", passport.authenticate("facebook"));
authRoutes.get("/auth/facebook/callback", passport.authenticate("facebook", {
  successRedirect: "/profile",
  failureRedirect: "/login"
}));

authRoutes.get("/auth/google", passport.authenticate("google", {
  scope: ["https://www.googleapis.com/auth/plus.login",
          "https://www.googleapis.com/auth/plus.profile.emails.read"]
}));

authRoutes.get("/auth/google/callback", passport.authenticate("google", {
  failureRedirect: "/profile",
  successRedirect: "/login"
}));



module.exports = authRoutes;
