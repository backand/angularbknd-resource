'use strict';

angular.module('myApp.authorization', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/authorization', {
    templateUrl: 'views/authorization/authorization.html',
    controller: 'authorizationCtrl'
  });
}])

.controller('authorizationCtrl', ['$scope', 'authService', '$http', '$log', function($scope, authService, $http, $log) {

	$scope.user = "guest@backand.com";
	$scope.password = "guest1234";
	$scope.appName = "restdemo";

	$scope.signIn = function () {
        console.log("authentication");
        $scope.loginError = '';
        $scope.waiting = true;

        authService.signIn($scope.user, $scope.password, $scope.appName,
        function (data, status, headers, config) {
        	$log.debug("authentication success", data, status);
            $scope.result = "authenticated";
        },
        function (data, status, headers, config) {
        	$log.debug("authentication error", data, status, headers, config);
            $scope.result = "failed to authenticate";
        })
    };

    $scope.signOut = function() {
        authService.signOut();
        $scope.result = null;
    };

    $scope.isSignedIn = function() {
        var flag = authService.isSignedIn();
        $log.debug(flag);
        $scope.result = flag? "yes" : "no";
    };

    $scope.result = null;

}]);