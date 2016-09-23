(function () {
'use strict';

    var list1 = [
        {
            name: "Milk",
            quantity: "2"
        },
        {
            name: "Donuts",
            quantity: "200"
        },
        {
            name: "Cookies",
            quantity: "300"
        },
        {
            name: "Chocolate",
            quantity: "5"
        },
        {
            name: "Cheese",
            quantity: "3"
        }
    ];

    var list2 = [];

angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function ToBuyShoppingController($scope, ShoppingListCheckOffService) {
        $scope.list1 = list1;

        $scope.list1.moveItem = function (itemIndex) {
            ShoppingListCheckOffService.moveItem(itemIndex);
        };

        $scope.empty = function (list) {
          return ShoppingListCheckOffService.empty(list);
        }

    }


    AlreadyBoughtShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController($scope, ShoppingListCheckOffService) {
        $scope.list2 = list2;

        $scope.empty = function (list) {
            return ShoppingListCheckOffService.empty(list);
        }
    }
    
    function ShoppingListCheckOffService() {
        var service = this;

        service.moveItem = function (itemIndex) {
            var item = list1[itemIndex];
            list2.push(item);
            list1.splice(itemIndex, 1);
        };

        service.empty = function (list) {
            return list.length === 0;
        };
    }
})();
