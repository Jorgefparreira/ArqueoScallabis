var arqueoApp = angular.module('arqueoApp', [
    'ngRoute',
    'ngAnimate',
    'projectControllers',
    'faqControllers'
]);

arqueoApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  }).
  when('/details/:itemId', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController'
  }).
  when('/archive', {
    templateUrl: 'partials/archive.html',
    controller: 'ArchiveController'
  }).    
  when('/archive/details/:itemId', {
    templateUrl: 'partials/archiveDetails.html',
    controller: 'ArchiveDetailsController'
  }).  
  otherwise({
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  });
}]);