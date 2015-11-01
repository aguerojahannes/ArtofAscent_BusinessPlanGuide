(function() {
	'use strict';
	angular.module('app')
	.controller('ProductsServicesController', ProductsServicesController);

	function ProductsServicesController(GlobalFactory, BizPlanFactory, $state, $stateParams) {
		var vm = this;
		vm.status = GlobalFactory.status; // or write o.status
		vm.ps = {};
		vm.saved = "";
		vm.updatedDateTime = "";
		vm.cleared = "";
		vm.ps.products = [{productName : "", productDescription: ""}];
		vm.ps.services = [{serviceName : "", serviceDescription: ""}];
		vm.ps.images = [""];

// POST ALL VALUES BY USER ID
vm.save = function(){
	console.log("from contr");
		BizPlanFactory.savePS(vm.ps, $stateParams.id).then(function(res){
			console.log("back from the controller" + res.data);
			vm.saved = res;
		});
	};

// PUT - EDIT DATE, TIME SAVED BY USER ID
vm.saveUpdatedDateTime = function(){
	BizPlanFactory.saveUpdatedDateTimePS(vm.ps).then(function(res){
		vm.updatedDateTime = res;
	});
};

// DELETE - CLEAR ALL VALUES  (FROM DB) AND START OVER BY USER ID
vm.clearAll = function(){
	BizPlanFactory.clearAllPS(vm.ps).then(function(res){
		vm.cleared = res;
	});
};

// GET - GET ALL VALUES ON THE PRINT/REVIEW STATE, NOT HERE


// GO TO DASHBOARD
vm.goGashboard = function(){
	$state.go("root.Dashboard");
};

// SAVE BS
		// bs.saveBS = function(){
		// 	SideFactory.saveBS(bs.brainstorm).then(function(res){
		// 		bs.saved= res;
		// 	});
		// };

// BRAINSTORM CLOSE/TOGGLE
		//  bs.close = function () {
      //         $mdSidenav('left').toggle();
      //       };
      //       bs.toggleLeft = function () {
      //         $mdSidenav('left').toggle();
      //       };

		// BRAINSTORM CLOSE/TOGGLE
				 vm.close = function () {
		              BizPlanFactory.close();
		            };
		            vm.toggleRight = function () {
		              BizPlanFactory.toggleRight();
		            };

// END
	}
})();
