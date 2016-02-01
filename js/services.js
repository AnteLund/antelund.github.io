angular.module('hsgApp.services').factory('Entry', function($resource){
  return $resource('http://localhost/api/students/:id', {id:'@_id'},{
    update: {
      method: 'PUT'
    }
  });
});
