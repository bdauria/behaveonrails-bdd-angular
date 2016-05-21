app.controller('SignoutController', function($scope, $auth) {
  $auth.signOut();
});
