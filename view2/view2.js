'use strict';

angular.module('myApp.picdiary', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/picdiary', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);