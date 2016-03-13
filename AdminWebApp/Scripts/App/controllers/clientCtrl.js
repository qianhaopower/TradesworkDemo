'use strict'

var app = angular.module('inspinia');

app.controller('clientCtrl', ["$scope", "$resource", "$state","dataSvc", function ($scope, $resource, $state, dataSvc) {

    $scope.message = 'message for recordCtrl';


    //$resource('http://trentdataservice.azurewebsites.net/api/books').query().$promise.then(function (item) {

    //    $scope.books = item;
    //});


    
    
    $scope.openClientDetail = function (person) {

        $state.go('index.clientdetail', {param: person.id});

    };


    $scope.deletePersonnel = function () {

    }

   
  
    $scope.personnelList = dataSvc.getFakeClientList();
    $scope.currentPage = 1;
    $scope.pageSize = 10;
    

  
   



}]);