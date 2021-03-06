const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const layouts      = require('express-ejs-layouts');
const mongoose     = require('mongoose');
const session      = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const passport     = require('passport');
const bcrypt        = require('bcrypt');
const flash        = require('connect-flash');
const User          = require('./models/user-model.js');
const dotenv       = require('dotenv');

dotenv.config();
mongoose.connect(process.env.MONGODB_URI);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);
app.use(session({
  secret: 'my passport local strategy',
  resave: true,
  saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy((username, password, next) => {

  User.findOne({ username }, (err, user) => {
    if (err) {
      next(err);
    } else if (!user) {
      next(null, false, { message: "Incorrect username" });
    } else if (!bcrypt.compareSync(password, user.encryptedPassword)) {
      next(null, false, { message: "Incorrect password" });
    } else {
      next(null, user);
    }
  });
}));

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((userId, cb) => {
  User.findById(userId, (err, user) => {
    cb(err, user);
  });
});

// passport.use(new FbStrategy(
//   {
//     clientID: process.env.FB_CLIENT_ID,
//     clientSecret: process.env.FB_CLIENT_SECRET,
//     callbackURL: process.env.HOST_ADDRESS + '/auth/facebook/callback'
//   },
//   saveSocialUser // <──◉ social login callback
// ));
//
// passport.use(new GoogleStrategy(
//   {
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: process.env.HOST_ADDRESS + '/auth/google/callback'
//   },
//   saveSocialUser // <──◉ social login callback
// ));
//
//
// function saveSocialUser (accessToken, refreshToken, profile, done) {
//   // See if there's a user from the provider with the given id.
//   User.findOne(
//     { provider: profile.provider, providerId: profile.id },
//     (err, userDocument) => {
//       // If there's an error or a user was retrieved, notify Passport by calling "done()".
//       if (err || userDocument) {
//         done(err, userDocument);
//         return;
//       }
//
//       // Otherwise attempt to save a new user (no username or password).
//       const names = profile.displayName.split(' ');
//       const theUser = new User({
//         firstName: names[0],
//         lastName: names.slice(1).join(' '),
//         provider: profile.provider,
//         providerId: profile.id
//       });
//
//       theUser.save((err, userDocument) => {
//         // Notify Passport about the result by calling "done()".
//         done(err, userDocument);
//       });
//     }
//   );
// }

app.use((req, res, next) => {
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
  } else {
    res.locals.user = null;
  }

  next();
});

const profileRouter = require('./routes/profile.js');
app.use('/', profileRouter);

const homeRoute = require('./routes/home-route.js');
app.use('/', homeRoute);

const authRoute = require('./routes/auth-routes.js');
app.use('/', authRoute);




// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
