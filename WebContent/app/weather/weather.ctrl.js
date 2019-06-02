(function(){
	
	angular.module("app.weather").controller("weather", function($scope, $routeParams, weatherSvc){
		console.log("helloooo weather controller");
		$scope.current = null;
		$scope.getTime= getTime;
		   if($routeParams.id != undefined)
			   {
			     getCurrent($routeParams.id)
			   }
		   
		 function getCurrent(id){
			 
			 weatherSvc.getCurrent(id)
			 .then(function(response){
					 
					  $scope.current = response.data;
					  console.log($scope.current);
					  
				}, function (error) {
				    console.error("unable to fetch the data" +  error);
				    
			});
		 }
		 
		 function getTime(dt){
			  return new Date(dt*1000);
		 }
		
	});
	
})();