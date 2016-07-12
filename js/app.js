var app = angular.module('bandsapp',['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when("/",{
		templateUrl:"views/cardTemplate.html",
		controller: "bands"
	})
	.when("/info/:name",{
		templateUrl: "views/infoband.html",
		controller: "groupBand"
	})
	.otherwise({
		redirectTo: "/"
	})
}]);

app.controller('bands',['$scope','$http', function($scope,$http){

	$http.get("json/Bands_Json.json").success (function (data){
		$scope.bandsjson = data;
	});
}]);

app.controller("groupBand",["$scope", "$http", "$routeParams", function($scope, $http, $routeParams){
	$scope.name = $routeParams.name;

	$http.get("json/Bands_Json.json").success (function (data){
		$scope.bandsjson = data;
	});

}]);

app.directive('header', function() {
    return {
     restrict : 'E',
     templateUrl : "views/customHeader.html"
    }
});

app.directive('footer', function() {
    return {
     restrict : 'E',
     templateUrl : "views/footer.html"
    }
});

/*app.directive('form', function() {
    return {
     restrict : 'E',
     templateUrl : "views/filter.html"
    }
});*/