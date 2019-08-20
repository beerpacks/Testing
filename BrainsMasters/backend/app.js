var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.json({
  type: 'application/*+json'
}))
// Set up a whitelist and check against it:
var whitelist = ['http://localhost:3001']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// Then pass them to cors:
app.use(cors(corsOptions));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

const getLoggerForStatusCode = (statusCode) => {
  if (statusCode >= 500) {
    return console.error.bind(console)
  }
  if (statusCode >= 400) {
    return console.warn.bind(console)
  }

  return console.log.bind(console)
}
const logRequestStart = (req, res, next) => {
  console.info(`${req.method} ${req.originalUrl}`)

  console.info(`${req.body}`)

  const cleanup = () => {
    res.removeListener('finish', logFn)
    res.removeListener('close', abortFn)
    res.removeListener('error', errorFn)
  }

  const logFn = () => {
    cleanup()
    const logger = getLoggerForStatusCode(res.statusCode)
    logger(`${res.statusCode} ${res.statusMessage}; ${res.get('Content-Length') || 0}b sent`)
  }

  const abortFn = () => {
    cleanup()
    console.warn('Request aborted by the client')
  }

  const errorFn = err => {
    cleanup()
    console.error(`Request pipeline error: ${err}`)
  }

  res.on('finish', logFn) // successful pipeline (regardless of its response)
  res.on('close', abortFn) // aborted pipeline
  res.on('error', errorFn) // pipeline internal error

  logResponseBody(req, res, next);
}

function logResponseBody(req, res, next) {
  var oldWrite = res.write,
    oldEnd = res.end;

  var chunks = [];

  res.write = function (chunk) {
    chunks.push(chunk);

    oldWrite.apply(res, arguments);
  };

  res.end = function (chunk) {
    if (chunk)
      chunks.push(chunk);

    var body = Buffer.concat(chunks).toString('utf8');
    console.log(req.path, body);

    oldEnd.apply(res, arguments);
  };

  next();
}

app.use(logRequestStart)




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;