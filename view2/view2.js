'use strict';

angular.module('myApp.notebook', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/notebook', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);