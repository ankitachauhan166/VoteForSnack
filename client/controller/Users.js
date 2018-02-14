var VoteforSnack = angular.module('VoteforSnack');

VoteforSnack.controller('UsersController',['$scope','$http','$location','$routeParams',function ($scope,$http,$location,$routeParams){
    console.log('users controler loaded....')

    $scope.getUsers = function(){    
        $http.get('/api/users').then(function(response){           
            $scope.users = response;
            console.log(response);
        });
    }
    $scope.getUser = function(){
        var id = $routeParams.id;
        $http.get('/api/users/'+id).then(function(response){        
            $scope.user = response.data;
            console.log(response.data);
        });
    }
    $scope.addUser = function(){ 
        console.log($scope.user);     
        $http.post('/api/users/',$scope.user).success(function(response){
           window.location.href='#/users';           
        });
    }
    $scope.updateUser = function(){
		var id = $routeParams.id;
		$http.put('/api/users/'+id, $scope.user).then(function(response){
            window.location.href='#/users';
            console.log(id);
		});
	}

	$scope.removeUser = function(id){
		$http.delete('/api/Users/'+id).then(function(response){
			window.location.href='#/users';
		});
	}
}]);