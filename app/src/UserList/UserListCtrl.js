'use strict'

userApp.controller('UserListCtrl', function($scope, UsersService, PostsService) {
  $scope.usersLoaded = false;
  $scope.postsLoaded = false;

  UsersService.getUsers().then(function(response) {
    $scope.usersLoaded = true;
    $scope.users = response.data
  })

  PostsService.getPosts().then(function(response) {
    $scope.postsLoaded = true;
    $scope.posts = response.data
  })


  /*   UsersService.getUsers().then(function (response) {
      $scope.users = response.data
      return PostsService.getPosts()
    }).then(function (response) {
      $scope.posts = response.data
    }) */

})