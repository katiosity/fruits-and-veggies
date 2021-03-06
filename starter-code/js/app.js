/* setup your angular app here */
var app = angular.module("ProduceGame", []);

//debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);

app.controller("Game", ["$scope", function($scope) {
	$scope.allProduce = fruits.concat(vegetables);
	$scope.allProduce.sort(function() {
		return 0.5 - Math.random()	
	});
	$scope.myFruits = [];
	$scope.myVeggies = [];

	// $scope.alerts = [
	// 	{ type: "danger", msg: "Oh no! Try again!" },
	// 	{ type: "success", msg: "Well done! You're a produce genius!" }
	// ];

	$scope.determineWinner = function() {
		if ($scope.allProduce.length > 0) {
			return false;
		} 

		for (var i = 0; i < fruits.length; i++) {
			if ($scope.myFruits.indexOf(fruits[i]) === -1) {
				return false;
			}
		}

		for (var i = 0; i < vegetables.length; i++) {
			if ($scope.myVeggies.indexOf(vegetables[i]) === -1) {
				return false;
			}
		}
		alert("Winner!");
		$scope.winner = true;
	};

	$scope.toFruits = function(idx) {
		thisItem = $scope.allProduce.splice(idx, 1);
		$scope.myFruits = $scope.myFruits.concat(thisItem);
		$scope.determineWinner();
	};

	$scope.toVeggies = function(idx) {
		thisItem = $scope.allProduce.splice(idx, 1);
		$scope.myVeggies = $scope.myVeggies.concat(thisItem);
		$scope.determineWinner();
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