'use strict'

var app = angular.module('inspinia');

app.controller('reportCtrl', ["$scope", "$resource", "$state","dataSvc", function ($scope, $resource, $state, dataSvc) {

    $scope.message = 'message for reportCtrl';


   

    $scope.currentPage = 1;
    $scope.pageSize = 10;
    
    $scope.openReport = function (id) {

        //$state.go('index.clientdetail', {param: person.id});
        dataSvc.geReportById(id);

    };


  
  
   
  
    dataSvc.geReportList(function(data){
        $scope.reportList= data
    }
    );
   
    

  
   



}]);