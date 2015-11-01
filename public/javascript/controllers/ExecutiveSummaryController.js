(function() {
	'use strict';
	angular.module('app')
	.controller('ExecutiveSummaryController', ExecutiveSummaryController);

	function ExecutiveSummaryController() {
		var vm = this;
		vm.sections = [
			{section: "Executive Summary", state: "ExecutiveSummary"},
			{section: "General Description", state: "GeneralDescription"},
			{section: "Products & Services", state: "Products_Services"},
			{section: "Marketing Plan", state: "MarketingPlan"},
			{section: "Operational Plan", state: "OperationalPlan"},
			{section: "Management & Organization", state: "Mgmt_Org"},
			{section: "Financial Plan", state: "FinancialPlan"},
			{section: "Appendices", state: "Appendices"}
		];


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



// END
	}
})();
