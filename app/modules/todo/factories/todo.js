function TodoFactory(){

    var factory = {
        mockToView : _mockToView
    };

    return factory;

    function _mockToView( item){
        var result = {};

        if(angular.isUndefined(item)){
            return;
        }
        if (angular.isDefined(item.title) && typeof item.title == string ){
            result.titulo = item.title;

        }
        if (angular.isDefined(item.sub) && typeof item.sub == string ){
            result.descricao = item.sub;

        }
    }
    if (angular.isDefined(item.price) && typeof item.price == number ){
        result.preco = item.price;

    }
}


angular.module("todoApp").factory("TodoFactory",TodoFactory);