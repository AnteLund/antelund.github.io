hsgApp.controller('StudentCreateController', function($scope,studentService) {
	$scope.yearOfGraduation = 'reset';
		$scope.cityOfInterest ='reset';

	var getCities = function(){
		studentService.getCities().then(function(allCitites){
			$scope.cities = allCitites;
			console.log(allCitites);	
		});
	};

	getCities();
	var emptyStudent = {firstName : '', lastName : '', email: ''}
	$scope.addStudent = function() {
		var student = {
			firstName : $scope.firstName, 
			lastName : $scope.lastName, 
			email: $scope.email,
			exam: $scope.exam,
			yearOfGraduation: $scope.yearOfGraduation,
			cityOfInterest: $scope.cityOfInterest};
		studentService.createStudent(student).then(function(response){
			alert("Student Created");
		});
		$scope.studentForm.$setPristine();
		$scope.firstName = emptyStudent.firstName;
		$scope.lastName = emptyStudent.lastName;
		$scope.email = emptyStudent.email;
		$scope.yearOfGraduation = 'reset';
		$scope.cityOfInterest ='reset';
	};
  	
});
