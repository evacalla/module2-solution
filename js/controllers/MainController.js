app.controller('hacerComprarCtrl', ['$scope', 'listaService', function($scope, listaService){
    $scope.items = listaService.getItemsComprar();
    $scope.comprarItem = function(index){
        listaService.comprarItem(index);
    };
}]);

app.controller('compradoCtrl', ['$scope', 'listaService', function($scope, listaService){
    $scope.items = listaService.getItemsComprado();
}]);