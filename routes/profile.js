const express = require('express');

const User    = require("../models/user-model.js");

const Birthday =  require("../models/birthday-model.js");


const birthdayRouter = express.Router();


// RENDER PROFILE PAGE
birthdayRouter.get('/profile', (req, res, next) => {

  Birthday.find((err, birthday) => {
    if (err) {
      next(err);
      return;
    }

    res.render('profile-page/index.ejs', {
      birthday: birthday,
      userInfo: req.user
    });
  });
});

// ADD NEW / DISPLAY THE FORM
birthdayRouter.get('/profile/new', (req, res, next) => {
  res.render('profile-page/new.ejs');
});

// USER INPUT
birthdayRouter.post('/newBirthday', (req, res, next) => {
  const birthdayInput = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    day: req.body.day,
    month: req.body.month,
    year: req.body.year,
    family: req.body.family,
    friend: req.body.friend,
    coworker: req.body.coworker,
    userId: req.user.id
  };

  const newBirthday = new Birthday(birthdayInput);

  newBirthday.save((err) => {
    if (err) {
      next(err);
      return;
    }

    res.redirect('/profile');
  });
});

// TO DELETE
birthdayRouter.post('/profile/:id/delete', (req, res, next) => {
  const birthday = req.params.id;

  Birthday.findByIdAndRemove(birthday, (err, product) => {
    if (err) {
      next(err);
      return;
    }

    res.redirect('/profile');
  });
});


// EDDIT ONW

birthdayRouter.get('/profile/:id/edit', (req, res, next) =>  {
  const birthdayInput = req.params.id;

  Birthday.findById(birthdayInput, (err, birthday) => {
    if (err) {
      next(err);
      return;
    }

    res.render('profile-page/edit.ejs', {
      birthday: birthday
    });
  });
});

// THEN updateOne

birthdayRouter.post('/profile/:id', (req, res, next) => {
  const birthdayInput = req.params.id;
  const birthdayUpdate = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    day: req.body.day,
    month: req.body.month,
    year: req.body.year
  };

  Birthday.findByIdAndUpdate(birthdayInput, birthdayUpdate, (err, birthday) => {
    if (err) {
      next(err);
      return;
    }
    res.redirect('/profile');
  });

});



module.exports = birthdayRouter;
