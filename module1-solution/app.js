(function () { 
'use strict'; 

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
 function LunchCheckController($scope) {
 	$scope.name = ""; 	
 	function splitString(stringToSplit, separador) {
		var arrayOfStrings = stringToSplit.split(separador);
		var LongitudTotal = arrayOfStrings.length
		if ($scope.tempestString === "") {
			$scope.SaySomething = "Please enter data first!";		
		}
			else {
				if (LongitudTotal <= 3) {
		  			$scope.SaySomething = "Enjoy!";
		  		}
		  			else {
		  				$scope.SaySomething = "Too Much!";
		  			}
		  	}		
	};	
	

	$scope.ResultString = function () {
		$scope.tempestString = $scope.name;			
		$scope.space = ",";
		splitString($scope.tempestString, $scope.space);
	};
}

})();
