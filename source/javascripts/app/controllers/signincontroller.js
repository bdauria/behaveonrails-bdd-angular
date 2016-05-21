app.controller('SigninController', function($scope, $auth) {
  $scope.$on('auth:login-error', function(ev, reason) {
    $scope.authError = reason.errors[0];
  });
  $scope.handleLoginBtnClick = function() {
    $auth.submitLogin($scope.loginForm);
  };
});
