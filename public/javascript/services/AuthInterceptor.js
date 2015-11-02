// Auth Interceptor - if token exists put it on the request and send it on the way.
// On App.JS: make sure to add $httpProvider to .config, and $httpProvider.Interceptors.push("AuthInterceptor");
// On Index: add to <script>
(function() {
    'use strict';
    angular.module('app')
        .factory('AuthInterceptor', AuthInterceptor);

    function AuthInterceptor($window) { // NOTE: We only need to inject $window
        var o = { // takes a function with config in the parameters
            request: function(config) {
                if ($window.localStorage.getItem("token")) { // if token exists in localStorage
                    config.headers.authorization = "Bearer " + $window.localStorage.getItem("token"); // if it exists, set this token on this authorization
                }
                return config; // send back the config with the token
            }
        };
        return o;
}
})();
