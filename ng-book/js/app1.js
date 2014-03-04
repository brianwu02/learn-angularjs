/*
 * Controller for index1.html
 */

function MyController($scope) {
    console.log('this is running');
    $scope.clock = {
        now: new Date()
    };
    
    var updateClock = function() {
        $scope.clock.now = new Date();
    };
    
    setInterval(function() {
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();
}

