var projectsControllers = angular.module('projectsControllers', []);

projectsControllers.controller('ProjectIndexCtrl', ['$scope', '$location', '$http', 'projectData',
	function($scope, $location, $http) {
		$scope.data = projectData.data;
	}
]);
