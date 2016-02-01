hsgApp.factory('studentService', function($http) {
  var studentService = {};

  studentService.getCities = function(callback) {
    return $http.get('http://localhost:8080/api/cities').then(function(response) {
      return response.data;
    });
  };

  studentService.createStudent = function(data){
    return $http.post('http://localhost:8080/api/student',data).success(function(data,status,headers){
      console.log("Task Added");
      return status;
    })
  }


 return studentService;
});
