(function() {
    "use strict";

    angular.module('public')
        .component('menuItem', {
            templateUrl: 'src/public/menuItem/menuItem.html',
            bindings: {
                menuItem: '<'
            },
            controller: MenuItemController
        });

    MenuItemController.$inject = ['BasePath'];

    function MenuItemController(BasePath) {
        var $ctrl = this;
        $ctrl.basePath = BasePath;
    }

})();