(function() {
	'use strict';
	angular.module('app')
	.factory('SideFactory', SideFactory);

	function SideFactory($http, $q) {
		var o = {};

o.saveBS = function(bsObj, userId){
	var q = $q.defer();
	$http.post("/brainstorm/" + userId + "/bs", bsObj).then(function(res){
		q.resolve(res);
	});
	return q.promise;
};

o.getBS = function(userId){
	var q = $q.defer();
	$http.get("/brainstorm/" + userId + "/bs").then(function(res){
		q.resolve(res);
	});
	return q.promise;
};

o.deleteBS = function(userId){
	var q = $q.defer();
	$http.delete("/brainstorm/" + userId + "/bs").then(function(res){
		q.resolve(res);
	});
	return q.promise;
};

o.editBS = function(bsObj, userId){
	var q = $q.defer();
	$http.put("/brainstorm/" + userId + "/bs", bsObj).then(function(res){
		q.resolve(res);
	});
	return q.promise;
};
		return o;
	}
})();
