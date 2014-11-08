var postServices = angular.module('postServices', []);

postServices.factory('postData', ['$http',
	function($http) {
		postData = {
			data: {
				posts: [{title: 'Loading', contents: ''}]
			},
			isLoaded: false
		};

		postData.loadPosts = function(deferred) {
			if (!postData.isLoaded) {
				$http.get('./posts.json').
					success(function(data) {
						postData.data.posts = data;
						postData.isLoaded = true;
						console.log('successfull loaded posts.');
						if (deferred) {
							deferred.resolve();
						}
					}).
					error(function() {
						console.error('Failed to load posts.');
						if (deferred) {
							deferred.reject('Failed to load posts');
						}
					});
			} else {
				if (deferred) {
					deferred.resolve();
				}
			}
		};

		postData.createPost = function(newPost) {
			if (newPost.newPostTitle == '' || newPost.newPostContents == '') {
				alert('Neither the Title nor the Body are allowed to be left blank.');
				return false;
			}

			data = {
				post: {
					title: newPost.newPostTitle,
					contents: newPost.newPostContents
				}
			}

			$http.post('/posts.json', data).
				success(function(data) {
					postData.data.posts.push(data);
					console.log('Successfully created post.');
				}).error(function() {
					console.log('Failed to create new post.')
				});

			return true;
		};

		return postData;
	}
]);

