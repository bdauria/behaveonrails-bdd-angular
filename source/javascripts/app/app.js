var app = angular.module('angularAuthentication', ['ngRoute', 'ng-token-auth']);

app.config(function($authProvider) {
  $authProvider.configure({
    apiUrl: 'http://localhost:3000'
  });
});

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html'
    })
    .when('/sign_up', {
      templateUrl: 'sign_up.html',
      controller: 'SignupController'
    })
    .when('/sign_in', {
      templateUrl: 'sign_in.html',
      controller: 'SigninController'
    })
    .when('/sign_out', {
      controller: 'SignoutController'
    })
});

app.run(['$rootScope', '$location', function($rootScope, $location) {
  $rootScope.$on('auth:login-success', function() {
    $location.path('/');
  })
  $rootScope.$on('auth:logout-success', function() {
    $location.path('/');
  });
}]);
