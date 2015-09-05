myWeatherApp.directive("weatherReport", function(){
    return{
        retrict: "E",
        templateUrl: 'directives/weatherreport.html',
        replace: true,
        scope:{
            weatherDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
        
    }
})