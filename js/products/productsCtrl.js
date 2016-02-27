

var app = angular.module('miniRouting');

app.controller('productsCtrl', function($scope, $stateParams, productService){
    
    if($stateParams.id === 'shoes'){
        $scope.productData = productService.shoeData;
    }
    
    if($stateParams.id === 'socks') {
        $scope.productData = productService.sockData;
    }
});

