angular.module('hsgApp', ['ui.bootstrap','ngResource']);

angular.module('hsgApp.services').factory('Entry', function($resource){
  return $resource('/api/students/:id');
});

angular.module('hsgApp.controllers').controller('ResourceController', function($scope, Entry){
  var entries = Entry.query(function(){
    console.log(entries);
  })
})
