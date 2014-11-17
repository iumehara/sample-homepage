var feedbackServices = angular.module('feedbackServices', []);

feedbackServices.factory('feedbackData', ['$http',
	function($http) {
		feedbackData = {
			data:  {
				feedback: {
					subject: '',
					name: '',
					email: '',
					content: ''
				}
			}
		}

		feedbackData.createFeedback = function(feedbackParams) {
			if (feedbackParams.feedbackEmail == '' ||  feedbackParams.feedbackContent == '') {
				alert('Neither the Title nor the Body are allowed to be left blank.');
				return false;
			}

			data = {
				feedback: {
					subject: feedbackParams.feedbackSubject,
					name: feedbackParams.feedbackName,
					email: feedbackParams.feedbackEmail,
					content: feedbackParams.feedbackContent
				}
			}

			$http.post('/feedbacks.json', data).
				success(function(data) {
					console.log(data);
					console.log('Successfully created feedback.');
				}).error(function() {
					console.log('Failed to create new feedback.')
				});

			return true;
		};

		return feedbackData;
	}
]);

