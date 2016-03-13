

'use strict'

var app = angular.module('inspinia');


app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function () {
    
        $uibModalInstance.close({ 'componentName': $scope.componentName, 'itemType': $scope.selectedItem });
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

app.controller('clientDetailCtrl', ['$scope', '$uibModal', '$state', '$stateParams', '$window', 'dataSvc', function ($scope, $uibModal, $state, $stateParams, $window, dataSvc) {


    $scope.personnel = dataSvc.getPerson($stateParams.param);// get by personnelId

    $scope.houseEntityType = [];
    $scope.houseEntityType.push({ 'type': 1, 'name': 'Bedroom' });
    $scope.houseEntityType.push({ 'type': 2, 'name': 'Bathroom' });
    $scope.houseEntityType.push({ 'type': 3, 'name': 'Kitchen' });
    $scope.houseEntityType.push({ 'type': 4, 'name': 'Living room' });
    $scope.houseEntityType.push({ 'type': 5, 'name': 'Outdoor' });
    $scope.houseEntityType.push({ 'type': 6, 'name': 'Other' });

    //get the componentList from service.
    $scope.componentList = dataSvc.getClientPropertyComponent($scope.personnel.id);
    


    //$scope.items = ['item1', 'item2', 'item3'];

    $scope.animationsEnabled = true;

    $scope.addNewHouseComponent = function (size) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                items: function () {
                    return $scope.houseEntityType;
                }
            }
        });

        modalInstance.result.then(function (result) {
            //find out the current id set max +1;
            var idMax = 0;
            if ($scope.componentList) {
                idMax = Math.max.apply(Math, $scope.componentList.map(function (o) { return o.id; }));
                             
            } else {
                $scope.componentList = [];
            }
            $scope.componentList.push({ id: idMax + 1, description: result.componentName + ' (' + result.itemType + ')' });

            //save this to dataSvcModel
            dataSvc.setClientPropertyComponent($scope.personnel.id, $scope.componentList);
        }, function () {
            //  $log.info('Modal dismissed at: ' + new Date());
        });
    };

    //$scope.toggleAnimation = function () {
    //    $scope.animationsEnabled = !$scope.animationsEnabled;
    //};

    $scope.openClientHouseDetail = function (componentDetail) {

        $state.go('index.clienthousedetail', { param: { 'componentId': componentDetail.id, 'personId': $scope.personnel.id } });

    };

    

    $scope.goToClientIndex = function () {

        $state.go('index.client');
    };



    $scope.generateReport = function () {

        dataSvc.generateReport($scope.personnel.id);
      
    }



}]);




