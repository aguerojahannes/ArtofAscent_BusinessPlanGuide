(function() {
	'use strict';
	angular.module('app')
	.controller('BrainstormController', BrainstormController);

	function BrainstormController(GlobalFactory, SideFactory, $timeout, $mdSidenav, $log, $stateParams, $mdToast, $interval) {
		var bs = this;
		bs.sections = GlobalFactory.sections;
		bs.brainstorm = {};
		bs.brainstorm.brainstorm = "";
		bs.instructions = "Write down all your ideas here. Just because you're being productive doesn't mean ideas have to slip by the wayside. \n \n \n";
		bs.saved = {};
		bs.fromDB = {};
		bs.brainstorm.brainstorm = "";
		// bs.showSave = true;

// SAVE BS
		bs.saveBS = function(){
			SideFactory.saveBS(bs.brainstorm, $stateParams.id).then(function(res){
					bs.getBS();
			});
		};


// GET BS
// get the bs.brainstorm object that was saved in database by the user. how? search by the user property in the database schema. see where user is the user id we have. user id is the stateparam.id on the client side. so if we send then in and then search using that, were should be able to retrieve the saved obj.
		bs.getBS = function(){
			SideFactory.getBS($stateParams.id).then(function(res){
					bs.brainstorm = res.data;
			});
		};
		bs.getBS();

// DELETE BS
// delete this user's bs.brainstorm obj from the database. how? find in the db where the user property matches the userId sent in from $stateParams.id. then delete that user's brainstorm obj.
		bs.deleteBS = function(){
			SideFactory.deleteBS($stateParams.id).then(function(res){
				bs.brainstorm = {};
			});
		};

		bs.editBS = function(){
			SideFactory.editBS(bs.brainstorm, $stateParams.id).then(function(res){
			});
		};

		$interval(bs.editBS, 60000);

// BRAINSTORM CLOSE/TOGGLE
		 bs.close = function () {
              $mdSidenav('left').toggle();
            };
         bs.toggleLeft = function () {
           $mdSidenav('left').toggle();
         };

			bs.showSimpleToast = function(content) {
			     $mdToast.show(
			       $mdToast.simple()
			       .content(content)
			       .position("top left")
			       .hideDelay(2000)
			     );
			   };

// END
	}
})();
