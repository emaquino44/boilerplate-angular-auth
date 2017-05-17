var app = angular.module('R-aaaApp', ['ui.router', 'R-aaaCtrls']);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/404');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/views/r-aaas.html',
                controller: 'HomeCtrl'
            })
            .state('newR-aaa', {
                url: '/r-aaas/new',
                templateUrl: 'app/views/newR-aaa.html',
                controller: 'NewCtrl'
            })
            .state('r-aaaShow', {
                url: '/r-aaas/:id',
                templateUrl: 'app/views/showR-aaa.html',
                controller: 'ShowCtrl'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'app/views/userSignup.html',
                controller: 'SignupCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/views/userLogin.html',
                controller: 'LoginCtrl'
            })
            .state('404', {
                url: '/404',
                templateUrl: 'app/views/404.html'
            });

        $locationProvider.html5Mode(true);
    }
]);
