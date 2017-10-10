app.controller("MainController", ["$scope", "$http", "$interval", function($scope, $http, $interval) {
	$scope.title = "Angular js Smart Clock";
	$scope.display = "on";
	
	/*   Get time every second   */
	$interval(function(){
		$scope.dateNow = Date.now();
	}, 1000);
	
	/*   Get current conditions every 15 minutes   */
	$interval(function(){
		$scope.getCurrentWeather();
	}, 900000);
	
		/*   Get forecast every 30 minutes   */
	$interval(function(){
		$scope.getForecast();
	}, 1800000);
	
	$scope.getCurrentWeather = function() {
	var key = 'fec103492f5bec16';
	var method = 'conditions';
	//if you request based on geocoords, API returns weather station in center of the area, not always most accurate, so instead going with closest actual station from wunderground
	//var location = '47.664707899999996,-122.35136820000001';
	var location = 'pws:KWASEATT210';
		$http.get('http://api.wunderground.com/api/'+key+'/'+method+'/q/'+location+'.json').then(function(response){ 
			var server = response.data.current_observation;
			$scope.currentWeather = {
				currentTemp : server.temp_f,
				currentWeather : server.weather,
				location : server.display_location.city,
				icon : server.icon
			};
			console.log($scope.currentWeather.currentTemp);
		});
	};
	
	$scope.getForecast = function() {
	var key = 'fec103492f5bec16';
	var method = 'forecast';
	//if you request based on geocoords, API returns weather station in center of the area, not always most accurate, so instead going with closest actual station from wunderground
	//var location = '47.664707899999996,-122.35136820000001';
	var location = 'pws:KWASEATT210';
		$http.get('http://api.wunderground.com/api/'+key+'/'+method+'/q/'+location+'.json').then(function(response){ 			
			$scope.forecastToday = response.data.forecast.simpleforecast.forecastday[0];
			$scope.forecastDays = response.data.forecast.simpleforecast.forecastday;
			$scope.forecastDays.splice(0,1);
		});
	};
	
	$scope.toggleScreen = function() {
		var command;
		if($scope.display == "on") { 
			command = "off";
			$scope.display = "off";
		} else {
			command = "on";
			$scope.display = "on";
		};
		
	$http({
		method: 'POST',		
		data: { cmd : command },
		url: 'scOffScreen.php'
	}).then(function successCallback(response) {
	
	});
	};	
	
	$scope.refreshApp = function() {	
		window.location.reload();
	};
	
}]);