(function() {
	'use strict';
	angular.module('app')
	.factory('SideFactory', SideFactory);

	function SideFactory($http, $q) {
		var o = {};

o.saveBS = function(brainstorm){
	var q = q.defer();
	$http.post("/brainstorm", brainstorm).then(function(res){
		q.resolve();
	});
	q.promise();
};

		return o;
	}
})();
