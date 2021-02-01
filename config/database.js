const Mysql         = require('mysql');

var connection      = Mysql.createConnection({
    host     : 'db',
    user     : 'root',
    password : 'password',
    database : 'hh'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
