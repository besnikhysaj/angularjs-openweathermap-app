angular.module('app.directives', [])

.directive('ngEnter', function () 
{
	return function (scope, element, attrs) {
		element.bind("keydown keypress", function (e) {
			var code = (e.keyCode ? e.keyCode: e.which);
			if((code === 13) || (code === 10)) {
				scope.$apply(function (){
					scope.$eval(attrs.ngEnter);
				});
				e.preventDefault();
			}
		});
	};
})
.directive('ngModelOnblur', function() {
	return {
		restrict: 'A',
		require: 'ngModel',
        priority: 1, // needed for angular 1.2.x
        link: function(scope, elm, attr, ngModelCtrl) {
        	if (attr.type === 'radio' || attr.type === 'checkbox') return;

        	elm.unbind('input').unbind('keydown').unbind('change');
        	elm.bind('blur', function() {
        		scope.$apply(function() {
        			ngModelCtrl.$setViewValue(elm.val());
        		});         
        	});
        }
    };
});