var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var mails = require('./routes/mails');
var mongoose = require("mongoose");
var mongo = require('mongodb');
mongoose.connect('mongodb://localhost/mail');
var db = mongoose.connection;
var passport = require('passport');
var Strategy=require('passport-local').Strategy;
var connectflash=require('connect-flash');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use('/',express.static(path.join(__dirname,'../client/dist/')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(function(req,res,next){
//     req.db = db;
//     next();
// });
db.on("error", console.error.bind(console, "Connection Error:"));
db.open('open', function(){
console.log("Connection Success");
});


app.use('/mails', mails);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

passport.use(new Strategy(function(username, password, cb)
{
  console.log("uname"+username);
    users.findOne({"username": username}, function(err, user)
{
      if (err) { return cb(err); }
if (!user) {return cb(null, false); }
if (user.password != password) {return cb(null, false); }
return cb(null, user);
    });
  }));
passport.serializeUser(function(user, done)
{
    console.log('serializeUser');
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  console.log("deserializeUser")
users.findById(id, function(err, user) {
    done(err, user);
  });
});
app.use(cookieParser());
app.use(require('express-session')({ secret: 'accesskey'}));
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
//session
app.use(passport.initialize());
app.use(passport.session());
app.use(connectflash());


module.exports = app;
