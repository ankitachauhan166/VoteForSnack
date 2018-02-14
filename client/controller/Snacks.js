var VoteforSnack = angular.module('VoteforSnack');

VoteforSnack.controller('SnacksController',['$scope','$http','$location','$routeParams',function ($scope,$http,$location,$routeParams){
    console.log('Snack controler loaded...')
    $scope.getSnacks = function(){
        $http.get('/api/snacks').then(function(response){          
            $scope.snacks = response;
            console.log(response);
        });
    }
    $scope.updateSnack = function(){
        var id = $routeParams.id;
        
		$http.post('/api/snacks/'+id, $scope.snack).then(function(response){
            { $inc: { VoteRecevied: 1} }
            console.log(id);
		});
    }
   
}]);

