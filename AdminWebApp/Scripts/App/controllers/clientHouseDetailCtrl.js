

'use strict'

var app = angular.module('inspinia');



app.controller('reportItemCtrl', function ($scope, $uibModalInstance, items) {

    $scope.reportItem = items;
    

    $scope.ok = function () {

        $uibModalInstance.close($scope.reportItem);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

app.controller('clientHouseDetailCtrl', ['$scope','$uibModal','$state','$stateParams','dataSvc',function ($scope,$uibModal,$state,$stateParams,dataSvc) {


    $scope.message = 'clientHouseDetail';
    $scope.componentDetail = dataSvc.getPersonComponent($stateParams.param.personId, $stateParams.param.componentId);
    $scope.person = dataSvc.getPerson($stateParams.param.personId);
    $scope.currentNode;
    
    $scope.reportItems = dataSvc.getClientPropertyComponentItem($scope.person.id, $scope.componentDetail.id);

  
    $scope.roleList2 = [
        {
        //1 bedroom
            "roleName": "Bedroom", "roleId": "role1", "children": [
            //Lighting circuit
            {
                "roleName": "Lighting Circuit", "roleId": "role11", "children": [],
                'data': ['40mm LED Downlights on a dimmer',
                  '50mm LED Downlights on a dimmer',
                  '60mm LED Downlights',
                  '60mm Halogen',
                  '20mm Halogen',
                ],
            },
             //Power points
            {
                "roleName": "Power Point", "roleId": "role11", "children": [],
                'data': ['DETA Jumbo Box',
               'HPM Gang Wall switch',
               'HPM 300V Wall points',
               'HPM 200V Wall points',
               'DETA 150V Wall points',
                ],
            },
              //TV wire
            {
                "roleName": "TV wire", "roleId": "role11", "children": [],
                'data': ['30m steel wire',
               'White wire 10m',
               'Red wire 20m',
               'Green wire 30m',
               'Orange wire 40m',
                ],
            },
             //other
            {
                "roleName": "other", "roleId": "role11", "children": [], 'data': ['Bedroom Safety Switch',

                ]
            },

            ], collapsed: false
        },


          {
              //2 kitchen
              "roleName": "Kitchen", "roleId": "role1", "children": [
              //Oven circuit
              { "roleName": "Lighting Circuit", "roleId": "role11", "children": [] },
               //Power points
              { "roleName": "Power Point", "roleId": "role11", "children": [] },
                //Kitchen Lights
              { "roleName": "Kitchen Lights", "roleId": "role11", "children": [] },
               //Fridge circuit
              { "roleName": "Fridge circuit", "roleId": "role11", "children": [] },
                //other
              { "roleName": "other", "roleId": "role11", "children": [] },

              ], collapsed: true
          },

            {
                //3 Bathroom
                "roleName": "Bathroom", "roleId": "role1", "children": [
                //Lighting circuit
                { "roleName": "Bathroom Circuit", "roleId": "role11", "children": [] },
                 //Power points
                { "roleName": "Power Point", "roleId": "role11", "children": [] },
                  //TV wire
                { "roleName": "Mirror wire", "roleId": "role11", "children": [] },
                 //other
                { "roleName": "other", "roleId": "role11", "children": [] },

                ], collapsed: true
            },


             {
                 //4 Living room
                 "roleName": "Living room", "roleId": "role1", "children": [
                 //Lighting circuit
                 { "roleName": "Living Circuit", "roleId": "role11", "children": [] },
                  //Power points
                 { "roleName": "Power Point", "roleId": "role11", "children": [] },
                   //TV wire
                 { "roleName": "Telephone wire", "roleId": "role11", "children": [] },
                  //other
                 { "roleName": "other", "roleId": "role11", "children": [] },

                 ], collapsed: true
             },

             {
                 //4 Outdoor
                 "roleName": "Outdoor", "roleId": "role1", "children": [
                 //Lighting circuit
                 { "roleName": "Outdoor Circuit", "roleId": "role11", "children": [] },
                  //Power points
                 { "roleName": "Power Point", "roleId": "role11", "children": [] },
                   //TV wire
                 { "roleName": "BBQ platform wire", "roleId": "role11", "children": [] },
                  //other
                 { "roleName": "other", "roleId": "role11", "children": [] },

                 ], collapsed: true
             },


             {
                 //4 Other
                 "roleName": "Other", "roleId": "role1", "children": [
                 //Lighting circuit
                 { "roleName": "Switchbox Circuit", "roleId": "role11", "children": [] }
                 
                 ], collapsed: true
             },
    
    ];

    $scope.dropCallback = function () {
      
        if (!$scope.reportItems)
        {
            $scope.reportItems = [];
        }
        var currentMaxNumber = $scope.reportItems.length;
        var nameInList =$.map( $scope.reportItems,function (v) { return v.name });
        if (nameInList.indexOf($scope.droped) == -1)//the item has not been added yet
            $scope.reportItems.push({
                'id': currentMaxNumber +1,
                'name': $scope.droped,
                'quantity': 1,
                'comment': '',
                //'attachment':'no',
            });
        dataSvc.setClientPropertyComponentItem($scope.person.id, $scope.componentDetail.id, $scope.reportItems);
    };

    $scope.goToClientDetail = function () {

        $state.go('index.clientdetail');
        $state.go('index.clientdetail', { param: $scope.person.id });

    };

   
    $scope.openClientHouseDetail = function (reportItem) {

        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'reportItemContent.html',
            controller: 'reportItemCtrl',
            size: undefined,
            resolve: {
                items: function () {
                    return reportItem;
                }
            }
        });

        //after modal close call back
        modalInstance.result.then(function (result) {
            
            if(!$scope.reportItems){
                $scope.reportItems = [];
            }
            for (var i = 0; i < $scope.reportItems.length; i++) {
                if ($scope.reportItems[i].id == result.id) {
                    //apply the new value.
                    $scope.reportItems[i].name = result.name;
                    $scope.reportItems[i].quantity = result.quantity;
                    $scope.reportItems[i].marketTag = result.marketTag;
                }
            }
            dataSvc.setClientPropertyComponentItem($scope.person.id, $scope.componentDetail.id, $scope.reportItems);
            
        }, function () {
            //  $log.info('Modal dismissed at: ' + new Date());
        });
    };


}]);

