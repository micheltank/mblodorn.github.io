app.controller('weatherController', ['$scope', '$timeout', 'weatherService', function($scope, $timeout, weatherService){

	$scope.forecasts = [];
	$scope.states = [];
	$scope.cities = [];
	$scope.min = {};
	$scope.max = {};
	$scope.beachData = {saturday:{}, sunday:{}};
	$scope.currentCity = '';
	$scope.currentState = '';
	$scope.isLoading = false;

	for(let state in states){
		$scope.states.push(state);
	};

	$scope.updateCities = function(){
		if($scope.currentState){
			$scope.cities = states[$scope.currentState].cidades
		}else{
			$scope.cities = [];
		}
	};

	$scope.updateForecasts = function() {
		$scope.forecasts = [];
		$scope.min = {};
		$scope.max = {};
		$scope.beachData = {saturday:{}, sunday:{}};
		if ($scope.currentCity) {
			$scope.isLoading = true;
			weatherService.getForecasts($scope.currentCity);
		}
	};

	$scope.saveFavorite = function(){
		weatherService.saveFavorite($scope.currentState, $scope.currentCity);
	};

	$scope.$on('updateForecasts', function(event, data){
		$scope.isLoading = false;
		$scope.forecasts = data.forecasts;
		$scope.min = data.min;
		$scope.max = data.max;
		$scope.beachData = data.beachData;
	});

	$scope.init = function(){
		const favorite = weatherService.getFavorite();
		$scope.currentState = favorite.state;
		$scope.updateCities();
		$scope.currentCity = favorite.city;
		$scope.updateForecasts();
	};

	$scope.init();
}]);