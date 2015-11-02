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
vm.savePS = function(){
		BizPlanFactory.savePS(vm.ps, $stateParams.id).then(function(res){
		});
	};

function getPS(){
	BizPlanFactory.getPS($stateParams.id).then(function(res){
		vm.ps = res.data;
	});
}
getPS();

vm.editPS = function(){
	BizPlanFactory.editPS(vm.ps, $stateParams.id).then(function(res){
	});
};

vm.deletePS = function(){
	BizPlanFactory.deletePS($stateParams.id).then(function(res){
		vm.ps = {};
	});
};

// GET - GET ALL VALUES ON THE PRINT/REVIEW STATE, NOT HERE


// GO TO DASHBOARD
vm.goDashboard = function(){
	// vm.savePS();
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
