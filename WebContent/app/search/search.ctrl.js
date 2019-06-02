(function(){
	
console.log("helloooo search controller");	
angular.module("app.search").controller("search", function($scope,weatherSvc){
		
	    $scope.cities= null;
		$scope.$on("search",search);
		function search(evt , data){
			weatherSvc.find(data.str)
			.then(function(response){
				 console.log(response);
				//console.log($scope.cities);
				  $scope.cities = response.data['list'];
				  console.log($scope.cities);
				  
			}, function (error) {
			    console.error("unable to fetch the data" +  error);
			    
		});


		}
	 
	});
	
	
})();