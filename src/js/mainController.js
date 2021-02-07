var projectControllers = angular.module('projectControllers', []);
var faqControllers = angular.module('faqControllers', ['ngAnimate', 'ui.bootstrap']);
var carouselController = angular.module('carouselController', ['ngAnimate', 'ui.bootstrap']);

carouselController.controller('carouselController', function($scope, $http) {	 
	$scope.slideData = [
		"img/header0.jpg",
		"img/header1.jpg",
		"img/header2.jpg"
	] 
})

projectControllers.controller('ListController', function($scope, $http,$timeout) { 
  $http({
    method: 'GET',
    url: 'js/projects.json'
	}).then(function successCallback(response) {
		$scope.projects = response.data.records;


    var initCarousel = function() {
      $('.owl-carousel').owlCarousel({
        center: true,
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:3000,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        mergeFit:false,
        merge:true,
        autoplayHoverPause:true,

        responsive:{
            0:{
                items:2,
                autoplay:false,
                autoplayTimeout:10000000, 
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })
  }

  $timeout(initCarousel, 500);    
	    // this callback will be called asynchronously
	    // when the response is available
	  }, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });
});

projectControllers.controller('ArchiveController', function($scope, $http, $routeParams) {
  $http({
    method: 'GET',
    url: 'js/archive.json'
    }).then(function successCallback(response) {
      document.getElementById('archive').scrollIntoView();         
    $scope.projects = response.data.records;
  
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });  
});

projectControllers.controller('DetailsController', function($scope, $http, $routeParams) {
  $http({
    method: 'GET',
    url: 'js/projects.json'
	}).then(function successCallback(response) {
    $scope.projects = response.data.records;
    $scope.whichItem = $routeParams.itemId;
	    // this callback will be called asynchronously
	    // when the response is available
	  }, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });  
});

projectControllers.controller('ArchiveDetailsController', function($scope, $http, $routeParams) {
  $http({
    method: 'GET',
    url: 'js/archive.json'
	}).then(function successCallback(response) {
    $scope.projects = response.data.records;
    $scope.whichItem = $routeParams.itemId;
	    // this callback will be called asynchronously
	    // when the response is available
	  }, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });  
});


faqControllers.controller('faqController', function($scope, $http) {	 
  $http({
    method: 'GET',
    url: 'js/faqs.json'
	}).then(function successCallback(response) {
    $scope.faqs = response.data.faqs;
    $scope.oneAtATime = false;
	    // this callback will be called asynchronously
	    // when the response is available
	  }, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  }); 
})