angular.module('app.filters', [])
.filter('fixresult', function() {
    return function(input) {
        if(!!input){
            var input = input.split("_");
            var input = input.join(" ");
            result = input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
        } else {
            result = "";
        }
        return result;
    }
})
.filter('celciusdegree', function() {
    return function(input) {
        if(!!input){
            result =  Math.round(input - 273.15);
        } else {
            result = "";
        }
        return result;
    }
});