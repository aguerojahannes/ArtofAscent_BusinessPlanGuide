(function() {
	'use strict';
	angular.module('app')
	.controller('ProductsServicesController', ProductsServicesController);

	function ProductsServicesController(GlobalFactory, BizPlanFactory, $state, $stateParams, $mdSidenav) {
		var vm = this;
		vm.status = GlobalFactory.status; // or write o.status
		vm.ps = {};
		vm.saved = "";
		vm.updatedDateTime = "";
		vm.cleared = "";
		vm.ps.products = [{productName : " ", productDescription: " "}];
		vm.ps.services = [{serviceName : " ", serviceDescription: " "}];
		vm.ps.images = [" "];

// POST ALL VALUES BY USER ID
vm.savePS = function(){
		BizPlanFactory.savePS(vm.ps, $stateParams.id).then(function(res){
			vm.ps = res.data;
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

// GO TO DASHBOARD
vm.goDashboard = function(){
	// vm.savePS();
	$state.go("root.Dashboard");
};

vm.resources = ["Entrepreneur's Guide to Biz Plans", "How to talk about what you do", "Spotlight: Painter Zelaika Horne", "Describing Your Work", "You Are Unique! Don't Forget To Say How", "Dummy's Guide To Being A Pro Artist"];
vm.messages = ["Alex: What do you do if you use sliding scale?", "Xhosa: Not sure how to describe my performance art. It's strage.", "Tyree: I only am offering 1 thing.", "Berenice: You got this, fam! Just keep at it!"];

				 vm.close = function () {
		              BizPlanFactory.close();
		            };
		            vm.toggleRight = function () {
		              BizPlanFactory.toggleRight();
		            };

// END
	}
})();
