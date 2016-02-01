hsgApp.controller('StudentCreateController', function($scope,StudentService) {

  $scope.cities = function() {
    StudentService.getCities().then(function(response){
      console.log(response);
    });
  }

  $scope.addStudent = function() {

  }
});
