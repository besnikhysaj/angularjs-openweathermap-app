angular.module('app.controllers', [])

.controller('HomeCtrl', ["$state", function($state)
{
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position){
			$state.go('results', {
				type: "position",
				param1: position.coords.latitude,
				param2: position.coords.longitude
			});
		},
		function(error){
			console.log(error);	
			$state.go('details');
		});
	}

}])
.controller('DetailsCtrl', ["$scope", "Requests", "$state", function($scope, Requests, $state)
{
	Requests.getData("js/countries.json").then(function(data){
		$scope.countries = data;
	});

	$scope.sendData = function(weather){
		if(weather && weather.postcode && weather.country)
		{
			$state.go('results', {
				type: "postcode",
				param1: weather.postcode,
				param2: weather.country
			});
		} else {
			alert("Please fill all the required fields!");
		}
	};

}])
.controller('ResultsCtrl', ["$scope", "$state", "Requests", "$animateCss", function($scope, $state, Requests, $animateCss)
{
	var type = $state.params.type,
	param1 = $state.params.param1,
	param2 = $state.params.param2;
	if(type == 'position'){
		url = "http://api.openweathermap.org/data/2.5/weather?APPID=db4ff33780011a6a959aedf87f021315&lat=" + param1 + "&lon=" + param2;
	} else{
		url = "http://api.openweathermap.org/data/2.5/weather?APPID=db4ff33780011a6a959aedf87f021315&zip=" + param1 + "," + param2;
	}
	console.log(url);
	Requests.getData(url).then(function(data){
		$scope.weather = data;
		$scope.icon = "images/" + data.weather[0].icon + ".svg";
		$scope.temp = data.main.temp;
		$scope.city = data.name;
		$scope.condition = data.weather[0].description;
		$scope.details = data.main;
	});

	Requests.getData("js/countries.json").then(function(data){
		$scope.countries = data;
	});

	$scope.sendData = function(weather){
		if(weather && weather.postcode && weather.country)
		{
			$state.go('results', {
				type: "postcode",
				param1: weather.postcode,
				param2: weather.country
			});
		} else {
			alert("Please fill all the required fields!");
		}
	};

}]);
