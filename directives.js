// DIRECTIVES
weatherApp.directive("forecastResult", function() {
   return {
       restrict: 'E',
       templateUrl: 'directives/forecastresult.html',
       replace: true,
       // isolated scope
       scope: {
           itemObject: "=",             // two-way binding
           convertToDateFunction: "&",  // function
           convertToFarFunction: "&",   // function
           dateFormat: "@"              // text
       }/*,
       link: function(scope, elements, attrs) {
                   
           console.log('Linking...');

           console.log(scope);

           if (scope.personObject.name == 'Jane Doe') {
                elements.removeAttr('class');
           }

           console.log(elements);

       }  */        
         
   }
});