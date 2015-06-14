var artistControllers = angular.module('artistControllers',[]);


// Gather Images

artistControllers.controller('ListController',['$scope', '$http', function($scope, $http){
	// $scope.$emit('LOAD')
	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=rc+plane+&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(data){
		
		$scope.youtube = data;
		// $scope.$emit('UNLOAD')
		// $scope.$on('LOAD', function(){$scope.loading=true});
		// $scope.$on('UNLOAD', function(){$scope.loading=false});
	});
}]);

artistControllers.controller('ListController_two',['$scope', '$http', function($scope, $http){
	$http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=fast+rc+plane+&type=video&key=AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ')
	.success(function(data_two){
		$scope.youtube_two = data_two;
	});
}]);

//Grab Video

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








