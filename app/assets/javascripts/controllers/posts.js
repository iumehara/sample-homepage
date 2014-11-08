var postsControllers = angular.module('postsControllers', ['postServices']);

postsControllers.controller('PostIndexCtrl', ['$scope', '$location', '$http', 'postData',
	function($scope, $location, $http) {

		$scope.data = postData.data;

		postData.loadPosts(null);

		$scope.navPost = function(postId) {
			$location.url('/posts/' + postId)
		}

		$scope.navNewPost = function() {
			$location.url('/posts/new')
		}

		$scope.navProjects = function() {
			$location.url('/projects');
		}
	}
]);

postsControllers.controller('PostShowCtrl', ['$scope', '$routeParams', '$location', '$q', 'postData',
	function($scope, $routeParams, $location, $q) {
		$scope.data = {
			postData: postData.data,
			currentPost: {
				title: 'Loading...',
				contents: ''
			}
		};

		$scope.data.postId = $routeParams.postId;

		$scope.navNewPost = function() {
			$location.url('/posts/new')
		}

		$scope.navHome = function() {
			$location.url('/')
		}

		$scope.prepPostData = function() {
			var post = _.findWhere(postData.data.posts, { id: parseInt($scope.data.postId) })
			$scope.data.currentPost.title = post.title;
			$scope.data.currentPost.contents = post.contents;
		}

		var deferred = $q.defer();
		deferred.promise.then($scope.prepPostData);

		postData.loadPosts(deferred);
	}
]);

postsControllers.controller('PostCreateCtrl', ['$scope', '$location', 'postData',
	function($scope, $location) {
		$scope.data = postData.data;

		postData.loadPosts(null);

		$scope.formData = {
			newPostTitle: '',
			newPostContents: ''
		}

		$scope.createPost = function() {
			postData.createPost($scope.formData);
		}

		$scope.clearPost = function() {
			$scope.formData.newPostTitle = '';
			$scope.formData.newPostContents = '';
		}

		$scope.navNewPost = function() {
			$location.url('/posts/new');
		}

		$scope.navHome = function() {
			$location.url('/');
		}
	}
]);
