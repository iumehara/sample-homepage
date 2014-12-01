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

			var return_data = $http.post('/feedbacks.json', data).
				success(function(response) {
					if (response[0] && response[0].indexOf("is invalid") >=0) {
						var message = response[0];
						console.log(message);
						feedbackData.isSubmitted = true;
					} else {
						console.log(response);
						var message = "Successfully created feedbck";
						console.log(message);
						feedbackData.isSubmitted = true;
					}
				}).error(function() {
					var message = 'Failed to create new feedback.';
					console.log(message);
					feedbackData.isSubmitted = true;
				});
			// 	then(function(response) {
			// 		response_data = response["data"]
			// 		console.log("asdf");
			// 		console.log(response_data);
			// 		console.log("asdf");
			// 		if (response_data[0] && response_data[0].indexOf("is invalid") >=0) {
			// 			mymessage = response_data[0];
			// 			console.log("===A===");
			// 			console.log(mymessage);
			// 			console.log("===A===");
			// 			return mymessage;
			// 		} else {
			// 			console.log(response_data);
			// 			mymessage = "Successfully created feedbck";
			// 			console.log("===B===");
			// 			console.log(mymessage);
			// 			console.log("===B===");
			// 		}
			// 	}, function(response) {
			// 		console.log("hello");
			// 	});
			// return_data.resolve();
		};

		return feedbackData;
	}
]);

