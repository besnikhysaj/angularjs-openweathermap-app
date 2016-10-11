angular.module('app', ['app.controllers', 'app.routes', 'app.services', 'app.directives', 'app.filters'])
.run(["$state", function($state)
{
	angular.element(document).ready(function() {
		console.log("App is ready...");
	});
}]);