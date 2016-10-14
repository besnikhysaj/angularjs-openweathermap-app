angular.module('app.routes', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('results', {
        url: "/results",
        cache: false,
        templateUrl: "templates/results.html",
        controller: 'ResultsCtrl'
    });
    $urlRouterProvider.otherwise('results');
});