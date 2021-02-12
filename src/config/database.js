const Mysql         = require('mysql');
var isConnected     = false;

var connection      = Mysql.createConnection({
    host     : 'db',
    user     : 'root',
    password : 'password',
    database : 'hh'
});

var executeQuery = function(query, callback) {
    if(isConnected == false){

        connection.on('error', function(err) {
            handleConnection(query, err, callback);
        });

        connection.connect(function(err){
            handleConnection(query, err, callback);
        });
    }else{
        execute(query, callback);
    }
}

var execute = function(query, callback) {
    connection.query(query, function (err, result) {
        if(err) {
            callback(err, null);
        } else {
            callback(null, result)
        }
    })    
}

var handleConnection = function(query, err, callback, limit = 1) {
    if(err) {
        isConnected = false;

        if(limit <= 10) {
            setTimeout(function(){
                console.log("Reconnecting... Attempt #" + limit);
                handleConnection(query, err, callback, limit+1);
            }, 1500);
        } else {
            callback({err: "Can't connect to the database"}, null);
        }
    } else {
        isConnected = true;
        execute(query, callback);
    }
}

module.exports = executeQuery;
