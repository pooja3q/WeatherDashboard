(function(){
	
	angular.module("app.data").factory("weatherSvc", function($http, $q){
		 return{
			  find: FindByLocation,
			  getCurrent :getCurrentWeather,
			  getForecast: getForecast
		 }
		 
		 function FindByLocation(location){
			 console.log(location);
			 var url="https://api.openweathermap.org/data/2.5/find?q="+ location +"&appid=defdeb8842508cd66489083ba690e6bb";
			  
			   var deffered = $q.defer();
			   
			   $http.get(url)
				 .then(function(response)
						 {
							//self.customer= data;
					        deffered.resolve(response);
							 //console.log(response);
							})
							
							.then(function(error){
								deffered.reject(error);
							});
			   
			  return deffered.promise; 
		 }
		 
		 function getCurrentWeather(id){
			 
			 var url="https://api.openweathermap.org/data/2.5/weather?id="+ id +"&appid=defdeb8842508cd66489083ba690e6bb";
			  
			   var deffered = $q.defer();
			   
			   $http.get(url)
				 .then(function(response)
						 {
							//self.customer= data;
					        deffered.resolve(response);
							 //console.log(response);
							})
							
							.then(function(error){
								deffered.reject(error);
							});
			   
			  return deffered.promise; 
			 
		 }
		 
		 function getForecast(id){
			 var url="http://api.openweathermap.org/data/2.5/forecast?id="+id+"&cnt=7&appid=defdeb8842508cd66489083ba690e6bb";
			  
			   var deffered = $q.defer();
			   
			   $http.get(url)
				 .then(function(response)
						 {
							//self.customer= data;
					        deffered.resolve(response);
							 //console.log(response);
							})
							
							.then(function(error){
								deffered.reject(error);
							});
			   
			  return deffered.promise; 
			 
			 
		 }
		 
 
	});
	
})();