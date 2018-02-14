var VoteforSnack = angular.module('VoteforSnack',['ngRoute']);
VoteforSnack.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
  }]);
VoteforSnack.config(function($routeProvider){
    $routeProvider
    .when('/',{
        controller:'UsersController',
       templateUrl:'views/home.html'
    })
    .when('/users',{
        controller:'UsersController',
        templateUrl:'views/users.html'
    })
    .when('/users/details/:id',{
        controller:'UsersController',
        templateUrl:'views/userdetails.html'
    })
    .when('/users/edit/:id',{
        controller:'UsersController',
        templateUrl:'views/edituser.html'
    })
    .when('/users/add',{
        controller:'UsersController',
        templateUrl:'views/adduser.html'
    })
    .when('/snacks',{
        controller:'SnacksController',
        templateUrl:'views/votestatus.html'
    })
    
    .otherwise({
        redirectTo:'/'
    });

});