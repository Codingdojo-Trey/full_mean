myApp.factory('UsersFactory', function($http){
	var users;

	var factory = {};
	
	factory.addUser = function(user, update_errors){
		
		$http.post('/users/create', user).success(function(data, status, headers, config) {
		  console.log('data is', data);
		  if(data == 'success')
	      {
			users.push({
				name: user.name,
				email: user.email
			});
	      	users = data;
	      	update_errors(false);
	      }
	      else
	      {
	      	update_errors(data.errors);
	      }
		});
	}
	factory.getUsers = function(callback){
		$http.get('/users/index.json').
	    success(function(data, status, headers, config) {
	      callback(data);
	      users = data;
	    });
	 }

	return factory;
})