angular.module('app.services', [])

.factory('Requests', ["$http", "$q", function($http, $q) {
	var result = [];

	return {
		getData: function(url) {
            // create new promise/queue
            var promise = $q.defer();
            $http.get(url).then(function(response) {
                // success
                promise.resolve(response.data);
            }, function (response) {
                // fail
                promise.reject(response);
            });

            // return promise
            return promise.promise;
        }
    };  
}]);