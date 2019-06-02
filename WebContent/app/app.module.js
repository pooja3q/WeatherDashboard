
(function(){
	 
	var name="myApp",
	    requires= ["app.shell",
	               "app.search",
	               "app.weather",
	               "app.forecast",
	               "app.component",
	               "app.data"
	               ];
	
	console.log("hello");
    angular.module(name, requires).run(["$route",function($route){
    	$route.reload();
    }]);
	
   
})();