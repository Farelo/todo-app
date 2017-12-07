function TodoCtrl( TodoFactory ) {
    var vm = this;
    vm.pageTitle = 'Todo <small> substitle</small>';
    vm.products = {
      title: "Product Test",
      Sub: "teste",
      Price: 13.54
    };
    vm.product = {};

    _init();

    function _init() {
        vm.product = TodoFactory.mockToView(vm.products);
       

    }


}

angular.module('todoApp')
    .controller('TodoCtrl', TodoCtrl);