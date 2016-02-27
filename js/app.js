/* global angular */


var app = angular.module('miniRouting', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
    
    $stateProvider
            .state('home', {
                templateUrl: 'js/home/homeTmpl.html',
                url: '/'
    })
            .state('settings', {
                templateUrl: 'js/settings/settingsTmpl.html', 
                url: '/settings',
//                controller: 'settingsCtrl'
    })
            .state('products', {
                templateUrl: 'js/products/productTmpl.html',
                url: '/products/:id',
                controller: 'productsCtrl'
                
    });
    
    $urlRouterProvider.otherwise('/');
    
});