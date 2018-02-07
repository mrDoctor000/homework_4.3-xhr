'use strict'

userApp.controller('EditUserCtrl', function($scope, $routeParams, UsersService) {

  UsersService.getUser($routeParams['userId']).then(function(response) {
    $scope.user = response.data;
  });

  $scope.editUser = function(myUser) {
    $scope.editSuccess = false

    var editUser = $scope.user;

    editUser.name = myUser.name;
    editUser.username = myUser.username;
    editUser.email = myUser.

    UsersService.editUser(editUser).then(function(response) {
      myUser = {};

      $scope.newUserId = response.data.id
      $scope.editSuccess = true
    })
  }
})