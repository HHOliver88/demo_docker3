var Express         = require("express");
var App             = Express();
const Mysql         = require('mysql');
const executeQuery  = require('./config/database.js');

App.get('/', async function(request, response) {
    
    let get_users_query     = Mysql.format(`SELECT * FROM users;`);
    let result              = await executeQuery(get_users_query);
    console.log("result:", result);

    response.send("<h1>Hello Services</h1>");
})

App.listen(3000, function() {});