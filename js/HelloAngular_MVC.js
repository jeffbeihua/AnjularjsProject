var app = angular.module('myApp', []);

app.controller("HelloAngular",function($scope){
    $scope.greeting = {text:"test"};
    $scope.emplyee= [{
        name: "jack",
        img:"image/test.png"
    }];

    $scope.technologies = [
        {name: 'jack', like : 0, dislike: 0},
        {name: 'may', like : 0, dislike: 0}
    ]
})