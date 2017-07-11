angular.module('app.services', [])

.factory('inspectionService', function ($http) {
  const apiUrl = 'https://internet-of-stings.herokuapp.com/inspections'
  return {
    all: function() {
      return $http.get(apiUrl)
    }
  }
})