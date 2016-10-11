angular.module('app.routes', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
        url: "/home",
        cache: false,
        templateUrl: "templates/home.html",
        controller: 'HomeCtrl'
    })
    .state('details', {
        url: "/details",
        cache: false,
        templateUrl: "templates/details.html",
        controller: 'DetailsCtrl'
    })
    .state('results', {
        url: "/results/:type/:param1/:param2",
        templateUrl: "templates/results.html",
        controller: 'ResultsCtrl'
    })
    $urlRouterProvider.otherwise('home');
});