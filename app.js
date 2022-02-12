var demoApp=angular.module('demoApp',[]);
demoApp.config(function($routeProvider){
    $routeProvider
    
    .when("/",{

        controller:'simpleController',
        templateUrl:urlBase + 'view.html'

    })

    .when("/view2",{
        controller:'anotherCtrl',
        templateUrl:"view2.html"

    })
    .otherwise({redirectTo:"view1.html"})



})
demoApp.controller("simpleController",simpleController)
demoApp.controller("anotherCtrl",()=>{
    $scope.cli=()=>{
        $scope.view2.modname=$scope.view2.name+" rocks!";
    }

})
function simpleController($scope){
			
			$scope.sharktank=[
      {name:'Aman',age:20},
      {name:'prabh',age:18},
       {name:'jett',age:16},
        {name:'kj',age:18},
         {name:'reyna',age:15}
      ]
      $scope.clickable=()=>{
          $scope.sharktank.push({name:$scope.new.name,age:$scope.new.age})
      
      }

}

