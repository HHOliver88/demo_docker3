var Express             = require("express");
var App                 = Express();
const UserModel         = require('./models/user.model');

class UserController {
    async getUsers() {
        let userModel           = new UserModel();
        let users               = await userModel.getUsers();
        console.log(users);
    }
}

new UserController().getUsers();

App.get('/', function(request, response) {
   response.send("<h1>Hello Services</h1>");
})

App.listen(3000, function() {});