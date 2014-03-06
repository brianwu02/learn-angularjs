angular.module('SampleApp', [])
    .controller('TextAreaWithLimitControl', function($scope) {

    MAX_LEN = 100;
    WARN_THRESHOLD = 50;

    $scope.messages = [];
    $scope.message = '';

    $scope.send = function(message_count) {
        // send message to message list.
        $scope.messages.splice(1, 0, { 
            data: $scope.message });
        // clear the text 
        $scope.clear();
    };

    $scope.clear = function() {
        $scope.message = '';
    };

    $scope.remove = function(index) {
        $scope.messages.splice(index, 1);
    };

    $scope.remaining = function() {
        return MAX_LEN - $scope.message.length;
    };

    $scope.shouldBeRed = function() {
        return $scope.remaining() < WARN_THRESHOLD;
    };

    $scope.shouldBeGreen = function() {
        return $scope.remaining() >= WARN_THRESHOLD;
    };

    $scope.hasValidLength = function() {
            if ($scope.remaining() > 0){
                return true;
            }
    };

    
    });
