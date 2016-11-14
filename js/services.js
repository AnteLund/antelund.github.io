hsgApp.factory('studentService', function($http) {
  var studentService = {};

  studentService.getCities = function(callback) {
    return $http.get('http://andreaslundsten.asuscomm.com:8080/api/cities').then(function(response) {
      return response.data;
    });
  };

  studentService.getRoles = function(callback) {
    return $http.get('http://andreaslundsten.asuscomm.com:8080/api/roles').then(function(response) {
      return response.data;
    });
  };
  studentService.createStudent = function(student) {
    return $http.post('http://andreaslundsten.asuscomm.com:8080/api/students',student).then(function(data,status,headers)
    {
        console.log("Student Added");
        return data;
    })
  }
 return studentService;
});
