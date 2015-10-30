(function() {
	'use strict';
	angular.module('app')
	.controller('BrainstormController', BrainstormController);

	function BrainstormController(SideFactory, $timeout, $mdSidenav, $log) {
		var bs = this;
		bs.instructions = "Write down all your ideas here. Just because you're being productive doesn't mean ideas have to slip by the wayside. \n \n \n";
		// bs.brainstorm.brainstorm = [];

// SAVE BS
		bs.saveBS = function(){
			SideFactory.saveBS(bs.brainstorm).then(function(res){
				bs.saved= res;
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
