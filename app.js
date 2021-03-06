var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');
var hbs = require('hbs');

var app = express();

var routerIndex = require('./router/index.js');

app.set('views', path.join(__dirname, 'views'));
//app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


app.use('/', routerIndex);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found 1');
    err.status = 404;
    next(err);
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

app.listen(3000, function () {
    console.log('app is listening at port 3000');
});


module.exports = app;
