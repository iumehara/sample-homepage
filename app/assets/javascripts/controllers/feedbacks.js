var feedbacksControllers = angular.module('feedbacksControllers', []);

feedbacksControllers.controller('FeedbackCreateCtrl', ['$scope', '$location', 'feedbackData',
	function($scope, $location) {
		$scope.navbarTemplate = {
			url: '../assets/_navbar.html'
		};

		$scope.data = feedbackData.data;

		$scope.feedbackParams = {
			feedbackSubject: '',
			feedbackName: '',
			feedbackEmail: '',
			feedbackContent: ''
		}

		$scope.createFeedback = function() {
			feedbackData.createFeedback($scope.feedbackParams);
		}

		$scope.clearFeedback = function() {
			$scope.feedbackParams.feedbackSubject = '';
			$scope.feedbackParams.feedbackName = '';
			$scope.feedbackParams.feedbackEmail = '';
			$scope.feedbackParams.feedbackContent = '';
		}

	}
]);
