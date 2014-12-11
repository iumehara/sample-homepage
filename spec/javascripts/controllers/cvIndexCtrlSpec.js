describe("CvIndexCtrl", function() {
	beforeEach(function() {
		module("cvsControllers");
		module("cvServices");
	});

	describe("before loading data", function() {
		it('should return null', inject(function($controller, $location, cvData) {
			var scope = {}
			ctrl = $controller("CvIndexCtrl", {
				$scope: scope,
				$location: $location,
				cvData: cvData
			});
			expect(scope.data.cvs).toBe(null);
		}));		
	})

	describe('with cvData', function() {
	  beforeEach(inject(function($controller, $rootScope, $httpBackend) {
	    $scope = $rootScope.$new();
	    
	    $httpBackend.when('GET', '../assets/data.json')
	      .respond({
	      	"icons": [
	      		{"url": "icon-url-one", "desc": "Ruby"},
	      		{"url": "icon-url-two", "desc": "Ruby on Rails"}
	      	],
	      	"experiences": [
	      		{ "title": "Developer", "name": "It's On Me"}
	      	]
	      });

	    CvIndexCtrl = $controller('CvIndexCtrl', { $scope: $scope });
	    $httpBackend.flush();
	  }));
	  
	  it('should return correct data from http"', function() {
	    expect($scope.data.cvs.icons).toEqual([
	      {"url": "icon-url-one", "desc": "Ruby"},
	      {"url": "icon-url-two", "desc": "Ruby on Rails"}
	    ]);
	    expect($scope.data.cvs.experiences).toEqual([
	    	{ "title": "Developer", "name": "It's On Me"}
	    ]);
	  });
	});
});

