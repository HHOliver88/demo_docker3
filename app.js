var Express             = require("express");
var App                 = Express();
const Mysql             = require('mysql');
const connection        = require('./config/database.js');

App.get('/', function(request, response) {
    
    let get_users_query 		= Mysql.format(`SELECT * FROM users;`);

    connection.query(get_users_query, function (err, result) {
        if(err) {
            console.log(err);
        } else {
            console.log("result:", result);
        }
    })

    response.send("<h1>Hello Services</h1>");
})

App.listen(3000, function() {});