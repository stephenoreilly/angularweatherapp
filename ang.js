var myApp = angular.module('myApp',["ngRoute"]);

myApp.config(function($routeProvider){
    $routeProvider
    
    .when('/',{
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    .when('/second/:num',{
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    .when('/second',{
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
});

myApp.service("nameService",function(){
   this.name ="john doe";
   var self =this;
   
   this.namelength = function(){
       return self.name.length;
   };
    
});


myApp.controller('mainController', ['$scope', '$location', "$log", "$routeParams", "nameService", 
function($scope, $location, $log, $routeParams, nameService){
    $scope.name=nameService.name;
    
    $scope.num = $routeParams.num || "Main";
    
    $scope.$watch('name',function(){
        nameService.name=$scope.name;
    })
    
    
    $log.main = "main property",
    $log.log($log);
    
    
    $log.info(nameService.namelength());
    
}]);
myApp.controller('secondController', ['$scope', '$location', "$log", "$routeParams", "nameService", 
function($scope, $location, $log, $routeParams, nameService){
    $scope.name="main";
    
    $scope.name=nameService.name;
    
    $scope.num = $routeParams.num || 1;
    
    $log.second = "second property",
    $log.log($log);
}]);