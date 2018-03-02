app.controller('hacerComprarControlador', [ 'listaComprar', '$scope', function(listaComprar, $scope){
    var comprar = this;
    $scope.comprarItems = listaComprar.getItemsComprar();
    comprar.comprarItem = function(index){
        listaComprar.comprarItem(index);
    };
}]);

app.controller('compradoControlador', ['listaComprar', '$scope', function(listaComprar, $scope){
    var comprado = this;
    $scope.compradoItems = listaComprar.getItemsComprado();
}]);


