const express = require('express');
const homeRoute  = express.Router();

homeRoute.get('/', (req, res, next) => {
  res.render('home-page/index.ejs');
});

module.exports = homeRoute;
