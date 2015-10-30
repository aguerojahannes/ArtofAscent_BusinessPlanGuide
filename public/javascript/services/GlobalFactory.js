(function() {
	'use strict';
	angular.module('app')
	.factory('GlobalFactory', GlobalFactory);

	function GlobalFactory($http, $q) {
		var o = {};

o.login = function(user){
	var q = q.defer();
	$http.post("/user", user).then(function(res){
		q.resolve();
	});
	q.promise();
};

o.logout = function(){
	removeToken();
	removeUser();
};

		return o;
	}
})();
