/**
 * Created by Sinwer on 2017/6/22.
 * sql
 */

var configs = require('../config/mysqlConfig').config;
var cn = require('MySQL');
exports.mysqlCnn = function(sql,callback){
    var mysqlcn = cn.createConnection(configs.db);
    var resulstData = {};
    mysqlcn.connect();
    mysqlcn.query(sql,function(err,results){
        if(err != null){
            console.log('数据库出错:-->'+err);
            mysqlcn.end();
            resulstData.code = 9999;
            resulstData.data = err;
            callback(err,resulstData);
        }else{
            mysqlcn.end();
            resulstData.code = 9000;
            resulstData.data = results;
            callback(undefined,resulstData);
        }
    });

} ;