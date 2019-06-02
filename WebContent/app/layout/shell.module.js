(function(){
	  var name="app.shell",
	  requires =["ngRoute"];
	  console.log("hello  shell");
	  angular.module(name, requires).config(function($routeProvider){
		  $routeProvider
		  .when("/search",{
			  templateUrl:"app/search/search.html",
			  controller:"search"
		  })
		  .when("/weather/:id",{
			  templateUrl:"app/weather/weather.html",
			  controller:"weather"
		  })
		  .when("/forecast/:id",{
			  templateUrl:"app/forecast/forecast.html",
			  controller:"forecast"
		  })
		  .otherwise({
			  redirectTo:"/search"
		  });
		  
	  });
	
	
})();