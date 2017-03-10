angular.module("personalwebsite", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {
    
    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html",
            controller: "HomeController"  
        })
        .when("/about", {
            templateUrl: "components/about/about.html",
            controller: "AboutController"
        })
        .when("/pictures", {
            templateUrl: "components/pictures/pictures.html",
            controller: "PicturesController"
        })
        .otherwise({
            redirectTo: "/home"
        });
}])