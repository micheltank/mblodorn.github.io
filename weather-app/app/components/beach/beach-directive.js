app.directive('beach', ()=>{
  return{
    restrict: 'E',
    templateUrl: 'app/components/beach/beach.html',
    scope:{
      beachData: '='
    }
  };
});