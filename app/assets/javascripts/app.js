var homepage = angular.module('homepage', [
	'ngRoute',
	'cvsControllers',
	'feedbacksControllers',
	'cvServices',
	'feedbackServices'
]);

homepage.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider.
			when('/cv', {
				templateUrl: '../assets/cvIndex.html',
				controller: 'CvIndexCtrl'
			}).
			otherwise({
				templateUrl: '../assets/default.html'
			});
		// $locationProvider.html5Mode(true);
	}
]);

homepage.config(["$httpProvider",
	function(provider) {
		provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
	}
])