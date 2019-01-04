// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "New York, NY";
    
});

weatherApp.service('weatherService', ['$resource', function($resource) {
    
   this.GetWeather = function(city) {
       var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast",                                     
                                    {
                                        get: { method: "JSONP" }
                                    }
                                  );
        return weatherAPI.get({   
        APPID: '87cbdaf12364fc1c538364ab124eef7e',
        q: city
    });
    
    //console.log($scope.weatherResult); 
   }
   
}]);