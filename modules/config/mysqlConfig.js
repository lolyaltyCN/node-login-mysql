var path = require('path');

exports.config = {
    debug: true,
    name: '数据中心',
    db: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'test',
        port: 3306
    }, //数据库连接
    domain: "localhost",
    host: 3000, //启动端口
    loginurl: "http://localhost:2700"
};
