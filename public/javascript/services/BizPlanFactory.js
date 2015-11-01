(function() {
	'use strict';
	angular.module('app')
	.factory('BizPlanFactory', BizPlanFactory);

	function BizPlanFactory($http, $q) {
		var o = {};

		o.savePS = function(psObj, userId){
						console.log("entering factory. ps.overview: " + psObj.overview + "id: " + userId);
			var q = $q.defer();
			$http.post("/products_services/" + userId + "/ps", psObj).then(function(res){
				q.resolve(res);
			});
			return q.promise;
		};


		// RESOURCE/COMMUNITY CLOSE/TOGGLE
				 o.close = function () {
		              $mdSidenav('right').toggle();
		            };
		            o.toggleLeft = function () {
		              $mdSidenav('right').toggle();
		            };


		return o;
	}
})();
