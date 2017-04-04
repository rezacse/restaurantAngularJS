(function() {
    "use-strict";

    angular.module('public')
        .config(routeConfig);

    /**
     * Configures the routes and views
     */
    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {
        //ROUTES
        $stateProvider
            .state('public', {
                abstract: true,
                templateUrl: 'src/public/public.html'
            })
            .state('public.home', {
                url: '/',
                templateUrl: 'src/public/home/home.html'
            })
            .state('public.menu', {
                url: '/menu',
                templateUrl: 'src/public/menu/menu.html',
                controller: 'MenuController',
                controllerAs: 'menuCtrl',
                resolve: {
                    menuCategories: ['MenuService', function(MenuService) {
                        return MenuService.getCategories();
                    }]
                }
            })
            .state('public.menuItems', {
                url: '/menu/{category}',
                templateUrl: 'src/public/menuItems/menuItems.html',
                controller: 'MenuItemsController',
                controllerAs: 'menuItemsCtrl',
                resolve: {
                    menuItems: ['$stateParams', 'MenuService', function($stateParams, MenuService) {
                        return MenuService.getMenuItems($stateParams.category);
                    }]
                }
            });
    }

})();