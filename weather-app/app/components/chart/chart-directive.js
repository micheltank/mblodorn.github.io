app.directive('chart', ()=>{
  return{
    restrict: 'E',
    templateUrl: 'app/components/chart/chart.html',
    scope:{
      data: '='
    }
  };
});