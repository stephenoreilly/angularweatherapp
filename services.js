myWeatherApp.service("cityService",function(){
    this.city="New York, NY";
});

myWeatherApp.service("weatherService",["$resource", function($resource){
    this.getWeather=function(city, days){
        var weatherAPI = 
        $resource("http://api.openweathermap.org/data/2.5/forecast/daily",{
            callback: "JSON_CALLBACK"
        }, {get: {method: "JSONP"}});
        
        return weatherAPI.get({q: city, cnt: days});
    };
}])


//http://api.wunderground.com/api/93f27086f0834592/conditions/q/CA/San_Francisco.json