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
    $scope.getVote = function(){    
        $http.get('/api/users').then(function(response){           
         //   for(i=0, i<response.length,i++ )
           // $scope.users = response;
            //var obj=JSON.parse(response)
            var item=new Array();
            var votes=new Array();
            for(var i=0; i<response.data.length; i++){
                if(i>0){
                    pos=item.indexOf(response.data[i].VotedFor);
                    console.log("position"+pos)
                    if(pos>-1){
                        votes[pos]=votes[pos]+1;
                    }
                    else{
                        console.log("INSIDE")
                        console.log(response.data[i].VotedFor);
                         console.log(response.data[i].VotedFor);
                        item[item.length]=response.data[i].VotedFor;
                        votes[votes.length]=1;
                    }
                }
                else{
                    console.log(response.data[i].VotedFor);
                    console.log(response.data[i].VotedFor);
                    item[0]=response.data[i].VotedFor;
                    votes[0]=1;
                }
                console.log("------------------")
                console.log(response.data[i].VotedFor);
                console.log("------------------")
            }
            console.log(item);
            console.log(votes);
            var strRes="['data':{";
            for(var j=0;j<item.length;j++){
                strRes+="{'name':"+item[j]+","+" 'votes':"+votes[j]+"}";
            }
            strRes+="}]";
            console.log(strRes);
          
            $scope.users = (item);
            $scope.status = (votes);
           

            console.log(item)
        });
    }
}]);