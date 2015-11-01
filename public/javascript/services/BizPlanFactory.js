(function() {
	'use strict';
	angular.module('app')
	.factory('BizPlanFactory', BizPlanFactory);

	function BizPlanFactory($http, $q, $mdSidenav) {
		var o = {};

		o.savePS = function(psObj, userId){
			var q = $q.defer();
			$http.post("/products_services/" + userId + "/ps", psObj).then(function(res){
				q.resolve(res);
			});
			return q.promise;
		};

		o.getPS = function(userId){
			var q = $q.defer();
			$http.get("/products_services/" + userId).then(function(res){
				q.resolve(res);
			});
			return q.promise;
		};


		// RESOURCE/COMMUNITY CLOSE/TOGGLE
				 o.close = function () {
		              $mdSidenav('right').toggle();
		            };
		            o.toggleRight = function () {
		              $mdSidenav('right').toggle();
		            };


		return o;
	}
})();
