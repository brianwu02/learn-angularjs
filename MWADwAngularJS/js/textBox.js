
var TextAreaWithLimitControl = function($scope) {
    MAX_LEN = 100;
    WARN_THRESHOLD = 50;

    $scope.remaining  = function() {
        return MAX_LEN - $scope.message.length;
    };

    $scope.shouldWarn = function() {
        console.log($scope.remaining() < WARN_THRESHOLD);
        return $scope.remaining() < WARN_THRESHOLD;
    };

    $scope.hasValidLength = function() {
        if ($scope.message.length <= MAX_LEN) {
            return true;
        }
    };
    
};
