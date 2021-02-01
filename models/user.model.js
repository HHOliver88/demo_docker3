const Mysql                 = require('mysql');

class UserModel {

	async getUsers() {
		let response_data 	    = {status: false, result: []};
		
		try{
			let get_users_query 		= Mysql.format(`SELECT * FROM users;`);

			let [get_users_result] 		= await this.executeQuery(get_users_query);
	
			if(get_users_result){
				response_data.status 	= true;
				response_data.result 	= get_users_result;
			}else{
				response_data.message 	= "No survey found";
			}
		}catch(err){
			response_data.message 		= "Error in getting users.";
		};
	
		return response_data;		
	}

	executeQuery(query) {
		return new Promise((resolve, reject) => {
			connection.query(query, function (err, result) {
				if(err) {
					reject(err);
				}else{
		        	resolve(result);
		        }
		    });
		});		
	}
}

module.exports = UserModel;