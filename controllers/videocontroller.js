'use strict';
var artistControllers = angular.module('artistControllers',['ngAnimate']);




// Gather Images

artistControllers.controller('ListController',['$scope', '$http', function($scope, $http){
	
	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+plane+&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(data){
		
		$scope.youtube = data;

		// $scope.randomSort = function(youtube){
		// 	return Math.random();
		// }

	});
	
	// $scope.$emit('LOAD')
	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=advanced+rc+planes&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(data_second){
		
		$scope.youtube_second = data_second;
		// $scope.$emit('UNLOAD')
		// $scope.$on('LOAD', function(){$scope.loading=true});
		// $scope.$on('UNLOAD', function(){$scope.loading=false});
	});

	
}]);





artistControllers.controller('ListController_two',['$scope', '$http', 'pagination', function($scope, $http, pagination){
	$scope.youtube_all = [];

	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=fast+rc+plane+&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(data_two){
		$scope.youtube_two = data_two;
		
    
		
	});
	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=fpv+rc+plane&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(data_three){
		
		$scope.youtube_three = data_three;
		
	});
	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+gliders&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(data_four){
		
		$scope.youtube_four = data_four;
		
	});
	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+plane+dog+fight&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(data_five){
		
		$scope.youtube_five = data_five;
		
	});
	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+plane+aerobatics&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(data_six){
		
		$scope.youtube_six = data_six;
		
	});

	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+plane+horizon+lobby&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(data_seven){
		
		$scope.youtube_seven = data_seven;
		
	});
	
}]);

// End of RC planes Main

// Start tutorials

artistControllers.controller('tutorialController',['$scope', '$http', function($scope, $http){
$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+plane+tutorial+&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(data_tutorial){
		$scope.tutorial = data_tutorial;
	});
$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=how+to+fly+rc+plane&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(data_tutorial_two){
		$scope.tutorial_two = data_tutorial_two;
    });
$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+plane+advanced+tutorial&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(data_tutorial_three){
		$scope.tutorial_three = data_tutorial_three;
});

	}]);
// End of tutorials 

// Start Quadcopters

artistControllers.controller('quadController',['$scope', '$http', function($scope, $http){
	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+quadcopters&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(quad){
		$scope.quadcopters = quad;
	});
	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+quadcopter+fpv&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(quad_two){
		$scope.quadcopters_two = quad_two;
	});
	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=fast+rc+quadcopter+&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(quad_three){
		$scope.quadcopters_three = quad_three;
	});
	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+quadcopter+fpv&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(quad_four){
		$scope.quadcopters_four = quad_four;
	});
	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+quadcopter+jrc+model+cx20&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(quad_five){
		$scope.quadcopters_five = quad_five;
	});
	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+quadcopter+dji+phantom&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(quad_six){
		$scope.quadcopters_six = quad_six;
	});
	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+quadcopter+blade+350+qx3&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(quad_seven){
		$scope.quadcopters_seven = quad_seven;
	});
	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+quadcopter+long+distance&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(quad_eight){
		$scope.quadcopters_eight = quad_eight;
	});
	}]);
// End Quadcopters

// Start Helicopters
artistControllers.controller('heloController',['$scope', '$http', function($scope, $http){
	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+helicopter&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(helodata){
		$scope.helos = helodata;
	});
	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+helicopter+aerobatics&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(helodata_two){
		$scope.helos_two = helodata_two;
		});
	}]);

// End Helicopters

// Start Reviews
artistControllers.controller('reviewController',['$scope', '$http', function($scope, $http){
	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+plane+review%2C+rc+quadcopter+review&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(reviewdata){
		$scope.review = reviewdata;
	});
	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+helicopter+aerobatics&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(reviewdata_two){
		$scope.review_two = reviewdata_two;
	});
	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=beginner+rc+plane+review&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(reviewdata_three){
		$scope.review_three = reviewdata_three;
	});
	}]);




// End Reviews
// End Grab photos

//Start Grab Video

artistControllers.controller('videoController',['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	/*
       For the video page, you are querying all the RC planes again. This needs to instead just
       ask google to pull one video using a specific id. This id will be passed in the route params
       and we just append it to our new query that grabs one video.

       I also changed itemId to videoId in the routes under app.js so it makes more sense.
	*/

	/* before */ /*
	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+plane+&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(data){
		$scope.code = '{{youtube.items[thevideo].videoId}}';
		$scope.youtube = data;
		$scope.thevideo = $routeParams.itemID;
	});
	*/  

	/* after */
	// First Page Controller
	$http.get('https://www.googleapis.com/youtube/v3/videos?id=' + $routeParams.videoId + '&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ&part=snippet,statistics')
	.success(function(data){
		// $scope.$emit('LOAD')
		$scope.video = data.items[0];
		$scope.videoId = $routeParams.videoId;
		// $scope.$on('LOAD', function(){$scope.loading=true});
		// $scope.$on('UNLOAD', function(){$scope.loading=false});
		// $scope.$emit('UNLOAD')
	});
	


	$http.get('https://www.googleapis.com/youtube/v3/videos?id=' + $routeParams.videoId + '&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ&part=snippet,statistics')
	.success(function(data){
		// $scope.$emit('LOAD')
		$scope.video_two = data.items[0];
		$scope.videoId_two = $routeParams.videoId;  
})
}]);

// // Second Page Controller
// artistControllers.controller('videoController_two',['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
// $http.get('https://www.googleapis.com/youtube/v3/videos?id=' + $routeParams.videoId + '&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ&part=snippet,statistics')
// 	.success(function(data_two){
		
// 		$scope.video_two = data_two.items[0];
// 		$scope.videoId_two = $routeParams.videoId;
		
// 	});  
// }]);















