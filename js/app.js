var app = angular.module('Main', []);
app.service( 'listaComprar', function(){
    var service = this;
    var hacerComprarItems = [
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
    
    var compradoItems = [];

    service.getItemsComprar = function(){
        return hacerComprarItems;
    };

    service.getItemsComprado = function(){
        return compradoItems;
    };

    service.comprarItem = function($index){
        var item = hacerComprarItems[$index];
        compradoItem.push($item);
        hacerComprarItems.splice($index, 1);
    };
});
    