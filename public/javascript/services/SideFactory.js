(function() {
	'use strict';
	angular.module('app')
	.factory('SideFactory', SideFactory);

	function SideFactory($http, $q) {
		var o = {};

o.saveBS = function(bsObj, userId){
	var q = $q.defer();
	console.log("userId: " +userId);
	$http.post("/brainstorm/" + userId + "/bs", bsObj).then(function(res){
		q.resolve(res);
	});
	return q.promise;
};

		return o;
	}
})();
