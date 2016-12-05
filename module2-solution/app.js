(function () { 
'use strict'; 

var ShoppingListCheckOffService = [
	{
		name: "Cookies",
		quantity: "10"		
	},
	{
		name: "Sugary drinks",
		quantity: "20"
	},
	{
		name: "Chips",
		quantity: "8"
	},
	{
		name: "Candies",
		quantity: "5"
	},
	{
		name: "Peanuts",
		quantity: "15"
	},
	{
		name: "Donuts",
		quantity: "30"
	}
];

var itemsBought = [
	{
		name: "",
		quantity: ""
	}
];

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['$scope'];
 function ToBuyController($scope) { 
 	var BoughttoList = this;	
 	$scope.ShoppingListCheckOffService = ShoppingListCheckOffService;
 	
 	$scope.BoughttoList = function (index) {
 		$scope.ShoppingListCheckOffService.splice(index, 1);		
 	};

AlreadyBoughtController.$inject = ['$scope'];
 function AlreadyBoughtController($scope) { 
 	var itemsBought = this;
 	$scope.itemsBought.name = $scope.ShoppingListCheckOffService.name
 };

}

})();
