angular.module('app.controllers', [])

.controller('ResultsCtrl', ["$scope", "$state", "Requests", "$animateCss", function($scope, $state, Requests, $animateCss)
{

	$scope.hasdata = false;
	$scope.loader = true;

	var getData = function(url){
		Requests.getData(url).then(function(data){
			$scope.hasdata = true;
			$scope.weather = data;
			$scope.icon = "images/" + data.weather[0].icon + ".svg";
			$scope.temp = data.main.temp;
			$scope.city = data.name;
			$scope.condition = data.weather[0].description;
			$scope.details = data.main;
		});
	}

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position){
			param1 = position.coords.latitude;
			param2 = position.coords.longitude;
			url = "http://api.openweathermap.org/data/2.5/weather?APPID=db4ff33780011a6a959aedf87f021315&lat=" + param1 + "&lon=" + param2;
			getData(url);
			$scope.geo = true;
			$scope.loader = false;
		},
		function(error){
			console.log(error);	
			$scope.geo = false;
			$scope.loader = false;
			Requests.getData("js/countries.json").then(function(data){
				$scope.countries = data;
			});
		});
	}

	$scope.sendData = function(weather){
		if(weather && weather.postcode && weather.country)
		{
			param1 = weather.postcode;
			param2 = weather.country;
			url = "http://api.openweathermap.org/data/2.5/weather?APPID=db4ff33780011a6a959aedf87f021315&zip=" + param1 + "," + param2;
			getData(url);
		} else {
			alert("Please fill all the required fields!");
		}
	};

}]);
