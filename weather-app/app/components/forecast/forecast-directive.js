app.directive('forecast', ()=>{
  return{
    restrict: 'E',
    templateUrl: 'app/components/forecast/forecast.html',
    scope:{
      data: '='
    }
  };
});