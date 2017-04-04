(function() {
    "use strict";

    angular.module('public')
        .component('menuCategory', {
            templateUrl: 'src/public/menuCategory/menuCategory.html',
            bindings: {
                category: '<'
            },
            controller: MenuCategoryController
        });

    MenuCategoryController.$inject = ['BasePath'];

    function MenuCategoryController(BasePath) {
        var $ctrl = this;
        $ctrl.basePath = BasePath;
    }

})();