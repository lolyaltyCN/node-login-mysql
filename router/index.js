var express = require('express');
var router = express.Router();
var mysqlCnn  = require('../modules/data/database');
var BaseConfig  = require('../modules/config');


router.get('/', function(req, res) {
    res.render('index/main');
});

router.post('/handlelogin', function(req, res) {
    var data = req.body;
    var sql = 'SELECT password FROM user WHERE username="'+data.username+'"';
    mysqlCnn.mysqlCnn(sql,function (err,result) {
        if(result.code==9000){
            if(result.data[0].password == data.password){
                BaseConfig.CookieInfo.SetCookie(res,'autho',true,46400000);
                res.redirect('./home');
            }else{
                res.render('index/login');
            }
        }
    });
});

router.get('/register', function(req, res) {
    res.render('index/register');
});

router.get('/home', function(req, res) {
    if(req.cookies.autho != 'true'){
        res.render('index/login');
    }else{
        res.render('index/home');
    }

});

router.post('/loginhandle', function(req, res) {
    var data = req.body;

   // var sql = "insert into test.user ('id','username','password') values('null','"+data.username+"','"+data.password+"');";
      var sql = "INSERT INTO user (id, username, password) VALUES (NULL, '"+data.username+"', '"+data.password+"');";
    mysqlCnn.mysqlCnn(sql,function (err,result) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
    });
    // res.end(JSON.stringify(result));
});



module.exports = router;
