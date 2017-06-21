var express = require('express');
var router = express.Router();


// router.get('./',function(res,req) {
//     res.render('index/main');
// })

router.get('/', function(req, res) {
    res.render('index/main');
});

router.get('/login', function(req, res) {
    res.end('good Sinwer!');
});

module.exports = router;
