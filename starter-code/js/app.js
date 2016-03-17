/* setup your angular app here */
var app = angular.module("ProduceGame", []);

//debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);

app.controller("Game", ["$scope", function($scope) {
	// console.log("This works!");
	// console.log(fruits);

	$scope.allProduce = fruits.concat(vegetables)
	console.log($scope.allProduce);
	console.log($scope.allProduce[4]);

	$scope.myFruits = [];
	$scope.myVeggies = [];

	$scope.toFruits = function(idx) {
		thisItem = $scope.allProduce.splice(idx, 1);
		$scope.myFruits = $scope.myFruits.concat(thisItem);
	};

	$scope.toVeggies = function(idx) {
		thisItem = $scope.allProduce.splice(idx, 1);
		$scope.myVeggies = $scope.myVeggies.concat(thisItem);
	};

	$scope.putFruitBack = function(idx) {
		thisItem = $scope.myFruits.splice(idx, 1);
		$scope.allProduce = $scope.allProduce.concat(thisItem);
	};

	$scope.putVeggieBack = function(idx) {
	thisItem = $scope.myVeggies.splice(idx, 1);
	$scope.allProduce = $scope.allProduce.concat(thisItem);
	}
}]);