(function () {

    angular.module("app.component").directive("poojasearchbox", function () {
    	console.log("helloo component view");
            return {
         
                templateUrl: "app/component/search-form.html",
                controller: searchBoxCtrlFn
            }
        });

    function searchBoxCtrlFn($scope) {
        $scope.search = function (searchStr) {
            $scope.$emit("search", { str: searchStr });
        }
    }
}());