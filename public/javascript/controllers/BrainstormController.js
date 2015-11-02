(function() {
	'use strict';
	angular.module('app')
	.controller('BrainstormController', BrainstormController);

	function BrainstormController(GlobalFactory, SideFactory, $timeout, $mdSidenav, $log, $stateParams) {
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
				// bs.showSave = false;
				// bs.saved = res;
			});
		};

// GET BS
// get the bs.brainstorm object that was saved in database by the user. how? search by the user property in the database schema. see where user is the user id we have. user id is the stateparam.id on the client side. so if we send then in and then search using that, were should be able to retrieve the saved obj.
		bs.getBS = function(){
			SideFactory.getBS($stateParams.id).then(function(res){
					console.log("get res.data: " + res.data);
					bs.brainstorm = res.data;
					// bs.showSave = false;
			});
		};
		bs.getBS();

// DELETE BS
// delete this user's bs.brainstorm obj from the database. how? find in the db where the user property matches the userId sent in from $stateParams.id. then delete that user's brainstorm obj.
		bs.deleteBS = function(){
			SideFactory.deleteBS($stateParams.id).then(function(res){
				bs.brainstorm = {};
				// bs.showSave = true;

			});
		};

		bs.editBS = function(){
			console.log(bs.brainstorm);
			SideFactory.editBS(bs.brainstorm, $stateParams.id).then(function(res){
				// bs.showSave = false;
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
