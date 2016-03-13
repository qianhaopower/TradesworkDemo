/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise("/index/dashboard");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider
            .state('index', {
                abstract: true,
                url: "/index",
                templateUrl: "staticview/common/content.html",
            })
        .state('index.dashboard', {
            url: "/dashboard",
            templateUrl: "staticview/dashboard.html",
            data: { pageTitle: 'Dashboard' }
        })
        .state('index.client', {
            url: "/clients",
            templateUrl: "staticview/clients.html",
            data: { pageTitle: 'Clients' },
            controller: 'clientCtrl'
        })
         .state('index.clienthousedetail', {
             url: "/clienthousedetail:param",
             templateUrl: "staticview/clienthousedetail.html",
             data: { pageTitle: 'Client House Detail' },
             controller: 'clientHouseDetailCtrl'
         })
          .state('index.clientdetail', {
              url: "/clientdetail:param",
              templateUrl: "staticview/clientdetail.html",
              data: { pageTitle: 'Client Detail' },
              controller: 'clientDetailCtrl'
          })
      .state('index.marketing', {
        url: "/marketing",
        templateUrl: "staticview/marketing.html",
        data: { pageTitle: 'Marketing' },
        controller: 'marketingCtrl'
      }).state('index.setting', {
          url: "/setting",
          templateUrl: "staticview/setting.html",
          data: { pageTitle: 'Settings' },
          controller: 'settingCtrl'
      }).state('index.report', {
          url: "/reports",
          templateUrl: "staticview/report.html",
          data: { pageTitle: 'Reports' },
          controller: 'reportCtrl'
      });;

}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
