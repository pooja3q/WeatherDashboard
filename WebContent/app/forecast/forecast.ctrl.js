(function(){
	
	angular.module("app.forecast").controller("forecast", function($scope, $routeParams,weatherSvc){
		console.log("helloooo forecast controller");
		$scope.forecast = null;
		$scope.getTime= getTime;
		 if($routeParams.id !== undefined){
			 getForecast($routeParams.id)
		 }
		 
		 function getForecast(id){
			 
			 weatherSvc.getForecast(id)
			 .then(function(response){
				 $scope.forecast = response.data;
				 console.log( $scope.forecast);
				 
			 },function(error){
				 
				 console.log("unable to fetch data to forecast page "+ error);
			 });
		 }
		 
		 function getTime(dt){
			  return new Date(dt*1000);
		 }
		
		
	});
	
})();