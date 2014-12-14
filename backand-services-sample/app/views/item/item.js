'use strict';

angular.module('myApp.item', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/item', {
    templateUrl: 'views/item/item.html',
    controller: 'itemCtrl'
  });
}])

.controller('itemCtrl', ['$scope', '$log', 'dataListService', 'dataItemService', function($scope, $log, dataListService, dataItemService) {

	$scope.fetchItem = function() {
		dataItemService.read(
            {
                dataType: "view",
                viewName: "Employees",
                id: 3
            }, 
            function (data) {
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