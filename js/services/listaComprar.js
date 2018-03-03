app.service( 'listaService', [ function(){
    
     var service = this;

    var comprarLista = [
        { 
            name: "cookies",
            quantity: 10
        },
        { 
            name: "milk", 
            quantity: 1
        },
        { 
            name: "chips",
            quantity: 5
        },
        { 
            name: "sugary drinks",
            quantity: 10
        },
        { 
            name: "peptin bezmo", 
            quantity: 2
        }
    ];
    
    var compradoLista = [];

    service.getItemsComprar = function(){
        return comprarLista;
    };

    service.getItemsComprado = function(){
        return compradoLista;
    };

    service.comprarItem = function(itemIndex){
        var item = comprarLista[itemIndex]
        compradoLista.push(item);
        comprarLista.splice(itemIndex, 1);
    };
}]);