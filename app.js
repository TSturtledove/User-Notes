const app = angular.module("notes", ["ngRoute"])

app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");

  $routeProvider
  .when("/", {
    controller: "front",
    templateUrl: "main.html"
  })
  .when("/new", {
    controller: "new",
    templateUrl: "newuser.html"
  })
  .when("/login", {
    controller: "log",
    templateUrl: "login.html"
  })
  .when("/notes", {
    controller: "notes",
    templateUrl: "notes.html"
  })
  .when("/register", {
    controller: "register",
    templateUrl: "register.html"
  })
  .otherwise({
    redirectTo:"/"
  })
})

app.controller("front", function($scope) {
  $scope.potatoes = "baked spuds!"
  $scope.steak = "dog"
  $scope.number = 8
  $scope.arrayThing = [1,2,3,4]
  $scope.obj = {1: "thing"}
  $scope.functionThing = function(){
    console.log("more than you thought")
  }


})

app.controller("new", function($scope) {
  $scope. =
})

app.controller("log", function($scope) {
  $scope. =
})

app.controller("notes", function($scope) {
  $scope. =
})

app.controller("register", function($scope) {
  $scope. =
})

app.controller("listcon", function($scope, $http) {
  console.log("blarg")

  $http.get(`list.json`)
  .then(function(justAVariableName) {
    console.log(justAVariableName)
    $scope.theEarlierVariable = justAVariableName.data.list
    $scope.theEarlierVariable.push("blarg")
  })
})
