var projectsControllers = angular.module('projectsControllers', ['projectServices']);

projectsControllers.controller('ProjectIndexCtrl', ['$scope', '$location', '$http', 'projectData',
	function($scope, $location, $http) {
		$scope.data = projectData.data;
	}
]);
