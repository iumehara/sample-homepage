var cvsControllers = angular.module('cvsControllers', []);

cvsControllers.controller('CvIndexCtrl', ['$scope', '$location', '$http', 'cvData',
	function($scope, $location, $http) {
		$scope.data = cvData.data;

		$scope.navbarPartial = {
			url: '../assets/_navbar.html'
		};

		$scope.feedbackForm = {
			url: '../assets/_feedbackForm.html'
		};

		$scope.navHome = function() {
			$location.url('/')
		}



	}
]);

