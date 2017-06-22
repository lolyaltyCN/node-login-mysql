var express = require('express');
var router = express.Router();
var mysqlCnn  = require('../modules/data/database');


router.get('/', function(req, res) {
    res.render('index/main');
});

router.get('/login', function(req, res) {
    res.render('index/login');
});

router.post('/loginhandle', function(req, res) {
    var data = req.body;
    var sql = 'select * from user';
   /* mysqlCnn.mysqlCnn(sql,function (result) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
    });*/
    res.end(JSON.stringify(result));




});



module.exports = router;
