(function () { 
'use strict'; 

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
 function ToBuyController(ShoppingListCheckOffService) { 
 	var BoughttoList = this;	
 	BoughttoList.itemsToBuy = ShoppingListCheckOffService.buyItem();

 	var itemAdder = this;
 	itemAdder.addItem = function (index) {
 		ShoppingListCheckOffService.addItem(index);
 	};
 	
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
 function AlreadyBoughtController(ShoppingListCheckOffService) { 
 	var itemBought = this;
 	itemBought.itemsToBought = ShoppingListCheckOffService.boughtItem();
 };

function ShoppingListCheckOffService() {
  var service = this;
	var itemsToBuy = [
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

var itemsToBought = [];

  service.addItem = function (index) {
    itemsToBought.push(itemsToBuy[index]);
    itemsToBuy.splice(index, 1);
  };

  service.buyItem = function () {
    return itemsToBuy;
  };

  service.boughtItem = function () {
    return itemsToBought;
  };

}

})();
