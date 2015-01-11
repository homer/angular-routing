var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/',{
      templateUrl:"views/home.html"
    })
    .when('/about',{
      templateUrl:"views/about.html"
    })
    .when('/products',{
      templateUrl:"views/products.html"
    })
    .otherwise({redirectTo:'/'});

  // $locationProvider.html5mode({ enabled: true, requireBase: false });
})