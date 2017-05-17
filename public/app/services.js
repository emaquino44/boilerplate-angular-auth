angular.module('R-aaaServices', ['ngResource'])
    .factory('R-aaa', ['$resource', function($resource) {
        return $resource('/api/r-aaas/:id');
    }]);
