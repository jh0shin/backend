var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'jh0shin',
    password: 'hak@won@go1!!',
    database: 'hakwongo',
    charset : 'utf8'
});

module.exports = connection;