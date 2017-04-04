(function() {
    "use strict";

    angular.module('common', [])
        // .constant('ApiPath', 'https://davids-restaurant.herokuapp.com')        
        .constant('ApiPath', 'https://rezacse-course5.herokuapp.com')
        .constant('BasePath', 'https://rezacse.github.io/restaurant')
        .config(config);

    config.$inject = ['$httpProvider'];

    function config($httpProvider) {
        $httpProvider.interceptors.push('loadingHttpInterceptor');
    }

})();