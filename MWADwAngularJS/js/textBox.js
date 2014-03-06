angular.module('SampleApp', [])
    .controller('TextAreaWithLimitControl', function($scope) {

    MAX_LEN = 100;
    WARN_THRESHOLD = 50;


    $scope.messages = [ {data: 'sample message'} ];

    $scope.send = function(message_count) {
        // send message to message list.
        $scope.messages.splice(1, 0, { no: message_count , data: $scope.message });
        // clear the text 
        $scope.message = '';
    };

    $scope.clear = function() {
        $scope.message = '';
    };

    $scope.remove = function(index) {
        $scope.messages.splice(index, 1);
    };

    $scope.remaining = function() {
        try {
            return MAX_LEN - $scope.message.length;
        } catch (TypeError) {
            return 100;
        }
    };

    $scope.shouldWarn = function() {
        return $scope.remaining() < WARN_THRESHOLD;
    };

    $scope.hasValidLength = function() {
        return true;
    };

    
    });
