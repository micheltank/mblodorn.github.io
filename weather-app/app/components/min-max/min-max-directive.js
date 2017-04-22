app.directive('minMax', ()=>{
  return{
    restrict: 'E',
    templateUrl: 'app/components/min-max/min-max.html',
    scope: {
      temperature:'@',
      type: '@',
      date: '@'
    }
  };
});