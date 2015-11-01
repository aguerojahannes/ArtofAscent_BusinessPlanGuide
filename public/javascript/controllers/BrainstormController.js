(function() {
	'use strict';
	angular.module('app')
	.controller('BrainstormController', BrainstormController);

	function BrainstormController(GlobalFactory, SideFactory, $timeout, $mdSidenav, $log, $stateParams) {
		var bs = this;
		bs.sections = GlobalFactory.sections;
		bs.brainstorm = {};
		bs.brainstorm.brainstorm = "Write down all your ideas here. Just because you're being productive doesn't mean ideas have to slip by the wayside. \n \n \n";
		// bs.brainstorm.brainstorm = [];

// SAVE BS
		bs.saveBS = function(){
			SideFactory.saveBS(bs.brainstorm, $stateParams.id).then(function(res){
				bs.saved = res;
			});
		};

// BRAINSTORM CLOSE/TOGGLE
		 bs.close = function () {
              $mdSidenav('left').toggle();
            };
            bs.toggleLeft = function () {
              $mdSidenav('left').toggle();
            };



// END
	}
})();
