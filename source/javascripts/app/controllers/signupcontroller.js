app.controller('SignupController', function($scope, $auth) {
  $scope.$on('auth:registration-email-error', function(ev, reason) {
    $scope.authError = reason.errors[0];
  });
  $scope.handleRegBtnClick = function() {
    $auth.submitRegistration($scope.registrationForm)
      .then(function(resp) {
        $auth.submitLogin({
          email: $scope.registrationForm.email,
          password: $scope.registrationForm.password
        })
      })
  };
});
