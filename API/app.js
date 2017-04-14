var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser'); 
var mongoose   = require('mongoose');
var app = express();
app.set('superSecret', "super.super.secret.shhh"); // secret variable
var db = mongoose.connect('mongodb://heroku_5qtdvmqc:r5l5o6o9ks470vrh3bef5mfalc@ds159220.mlab.com:59220/heroku_5qtdvmqc', function(err)
{
	if (err) {
	   console.log('Could not connect to MongoDB!');
	}
  else
  {
    console.log("connected!!!");
  }
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', require('./routes'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({status:'error'});
});

 

module.exports = app;
