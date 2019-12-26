var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var session = require('express-session');
var bodyParser = require('body-parser');
var router=express.Router();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var danceRouter = require('./routes/dance');
var loginRouter = require('./routes/login');
var choreoRouter = require('./routes/choreo');
var studioRouter = require('./routes/studio');
var coursesRouter = require('./routes/courses');
var tempRouter = require('./routes/temp');
var deldancer=require('./routes/deldancer');
var delchoreo=require('./routes/delchoreo');
var delcourses=require('./routes/delcourses');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'stepup'
});
connection.connect(err => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});
global.connection = connection;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/dance', danceRouter);
app.use('/choreo', choreoRouter);
app.use('/courses', coursesRouter);
app.use('/studio', studioRouter);
app.use('/temp', tempRouter);
app.get('/deldancer/:category',deldancer);
app.get('/delchoreo/:category',delchoreo);
app.get('/delcourses/:category',delcourses);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

connection.connect(function(err) {
  // if (err) throw err;
  console.log("Connected!");
});


module.exports = app;