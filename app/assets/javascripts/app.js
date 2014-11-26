var homepage = angular.module('homepage', [
	'ngRoute',
	'cvsControllers',
	'feedbacksControllers',
	'postsControllers',
	'projectsControllers',
	'cvServices',
	'feedbackServices',
	'postServices',
	'projectServices'
]);

homepage.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider.
			when('/cvs', {
				templateUrl: '../assets/cvIndex.html',
				controller: 'CvIndexCtrl'
			}).
			when('/feedbacks/new', {
				templateUrl: '../assets/feedbackNew.html',
				controller: 'FeedbackCreateCtrl'
			}).
			when('/posts/new', {
				templateUrl: '../assets/postNew.html',
				controller: 'PostCreateCtrl'
			}).
			when('/posts/:postId', {
				templateUrl: '../assets/postShow.html',
				controller: 'PostShowCtrl'
			}).
			when('/posts', {
				templateUrl: '../assets/postIndex.html',
				controller: 'PostIndexCtrl'
			}).
			when('/projects', {
				templateUrl: '../assets/projectIndex.html',
				controller: 'ProjectIndexCtrl'
			}).
			otherwise({
				templateUrl: '../assets/postIndex.html',
				controller: 'PostIndexCtrl'
			});
		// $locationProvider.html5Mode(true);
	}
]);

homepage.config(["$httpProvider",
	function(provider) {
		provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
	}
])