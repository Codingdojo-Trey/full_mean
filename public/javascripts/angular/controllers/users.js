myApp.controller('UsersController', function($scope, UsersFactory){
	// invoke the method immediately!!!
	UsersFactory.getUsers(function(users){
		$scope.users = users;
	});

	$scope.addUser = function(){
		// this method takes two parameters: first one is new user data, second is a callback to be executed after the DB
		// runs the query.  
		UsersFactory.addUser($scope.new_user, function(err){
			$scope.errors = err;
		});
	}
});