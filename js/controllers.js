hsgApp.controller('StudentCreateController', function($scope,$filter,studentService) {
	$scope.yearOfGraduation = 'reset';
	$scope.cityOfInterest = 'reset';

	var getCities = function(){
		studentService.getCities().then(function(allCitites){
      angular.forEach(allCitites, function(value,key){
        value.selected = "false";
      })
      $scope.cities = allCitites;
		});
	};
  getCities();

	$scope.addStudent = function() {
		studentService.createStudent(buildStudent()).then(function(response){
			console.log(response);
      resetForm();
		});
	};

  var buildStudent = function(){
    var selectedCities = $filter('filter')($scope.cities, {selected:'true'});
    var student = {
      firstName : $scope.firstName,
      lastName : $scope.lastName,
      email: $scope.email,
      exam: $scope.exam,
      yearOfGraduation: $scope.yearOfGraduation,
      cityOfInterest: selectedCities};
    return student;
  }

  var resetForm = function(){
    var emptyStudent = {firstName : '', lastName : '', email: '', yearOfGraduation: 'reset', cityOfInterest: 'reset'};
    $scope.studentForm.$setPristine();
    $scope.firstName = emptyStudent.firstName;
    $scope.lastName = emptyStudent.lastName;
    $scope.email = emptyStudent.email;
    $scope.yearOfGraduation = emptyStudent.yearOfGraduation;
    $scope.cityOfInterest = emptyStudent.cityOfInterest;
  }
});
