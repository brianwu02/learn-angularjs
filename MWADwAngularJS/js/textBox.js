angular.module('SampleApp', [])
    .controller('TextAreaWithLimitControl', function($scope) {

    MAX_LEN = 100;
    WARN_THRESHOLD = 50;

    $scope.remaining = function() {
        messageLength = $scope.message.length;
        return MAX_LEN - messageLength;
    };

    $scope.shouldWarn = function() {
        return $scope.remaining() < WARN_THRESHOLD;
    };

    $scope.hasValidLength = function() {
        if ($scope.message.length <= MAX_LEN) {
            return true;
        }
    };
    
    });
