'use strict';

angular.module('myApp.list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'views/list/list.html',
    controller: 'listCtrl'
  });
}])

.controller('listCtrl', ['$scope', '$log', 'dataListService', 'dataItemService', function($scope, $log, dataListService, dataItemService) {

	$scope.fetchList = function() {
		dataListService.read(
			{
				dataType: "view",
                viewName: "Employees",
                pageSize: 10,
                pageNumber: 1,
                filter: "",
                sort: "",
                search: ""
            },

            function(data) {
            	$log.debug(data);
                if (data.status == 401){
                    $scope.result = "not authenticated";
                }
                else{
                    $scope.result = data;
                }
            },

            function(error) {
                $log.debug(error);
                $scope.result = error;
            }

        );
	};

	
}]);