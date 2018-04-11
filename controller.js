app.controller("ctrl",($scope,$interval,$timeout,$location,$anchorScroll)=>{

    $scope.changeView=()=>{
        $scope.first=!$scope.first;
    };
    
    $scope.moveItRight=()=>{
    angular.element(right).addClass('animright');
    angular.element(divleft).css('left','0%');
    $scope.hide=true
         $timeout(()=>{
        angular.element(right).css('display','none');
    },1000);
    };
    
    $scope.backLeft=()=>{
        
        angular.element(divleft).css('left','-100%');
        $timeout(()=>{$scope.hide=false;
            angular.element(right).removeClass('animright');
            angular.element(right).css('display','block');
        },1000);
        
    };

    $scope.removeIt=(scrollLocation)=>{
        angular.element(divleft).css('left','-100%');
        $timeout(()=>{

            angular.element(right).removeClass('animright');
            $location.hash(scrollLocation);
            $anchorScroll();
        },1000);

    };
    
    
    
    });
