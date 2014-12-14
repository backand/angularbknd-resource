'use strict';

angular.module('backAnd.data', []);
angular.module('backAnd.auth', []);


// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.authorization',
  'myApp.list',
  'myApp.item',
  'backAnd.services',
  'backAnd.data',
  'backAnd.auth'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/authorization'});
}]);
