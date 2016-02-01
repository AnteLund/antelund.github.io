hsgApp.factory('StudentService', function($http) {
  var studentService = {};

  studentService.getCities = function(callback) {
    $http.get('http://localhost:8080/api/cities').then(function(response) {
      console.log(response);
      console.log()
      return(response);
    });
    //return [
    //  {
    //    firstName: 'Jonathan',
    //    lastName: 'Lindvall',
    //    email: 'jonatan.lindvall@capgemini.com'
    //  }
    //];
 };

 return studentService;
});
