'use strict';

angular.module('myApp.unofficial', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/unofficial', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', [function() {

}]);