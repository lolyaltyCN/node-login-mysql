/**
 * Created by Sinwer on 2017/6/22.
 * sql
 */

var configs = require('../config/mysqlConfig').config;
var cn = require('MySQL');
exports.mysqlCnn = function(sql,callback){
    var mysqlcn = cn.createConnection(configs.db);
    mysqlcn.connect();
    mysqlcn.query(sql,function(err,results,fields){
        if(err){
            console.log(err);
            mysqlcn.end();
            callback(err,undefined);
        }
        mysqlcn.end();
        console.log(results);
        callback(undefined,results);

    });

} ;