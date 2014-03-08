
angular.module('sampleApp', ['engines'])
  .run(function($rootScope) {
    $rootScope.appStarted = new Date();
  })
  .controller('TextAreaWithLimitControl', function($scope, helloWorldFactory) {
    MAX_LEN = 100;
    WARN_THRESHOLD = 50;
    $scope.messages = [];
    $scope.message = '';
  
    $scope.send = function() {
      // send message to message list.
      $scope.messages.splice(1, 0, {
        data: $scope.message 
      });
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
      if ($scope.remaining() > 0) {
        return true;
      }
    };
    $scope.doFactoryMethod1 = function() {
      // set the text box to data from factory method
      $scope.message = helloWorldFactory.sayHello();
    };
    $scope.doFactoryMethod2 = function() {
      $scope.message = helloWorldFactory.sayByeBye();
    };
  })
  .factory('helloWorldFactory', function() {
    return {
      sayHello: function() {
        return "hello world!";
      },
      sayByeBye: function() {
        return "bye bye!";
      }
    };
  })
  .factory('car', function($log, dieselEngine) {
    return {
      start: function() {
        $log.info('starting', + dieselEngine.type);
      }
    };
  });

angular.module('engines', [])
  .factory('dieselEngine', function() {
    return {
      type: 'diesel'
    };
  });
  
