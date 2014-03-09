
angular.module('sampleApp', ['cars', 'engines', 'tires'])
  .run(function($rootScope) {
    $rootScope.appStarted = new Date();
  })
  .controller('AnotherController', function($scope, steamEngine) {
    // steamEngine data should be shared with TextAreaWithLimitControl controller.
  })
  .controller('TextAreaWithLimitControl', function($scope, helloWorldFactory, car, steamEngine) {
    MAX_LEN = 100;
    WARN_THRESHOLD = 50;
    $scope.messages = [];
    $scope.message = '';

    car.start();
    steamEngine.start();

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
  .config(function(steamEngineProvider) {
    steamEngineProvider.setYearMade(2002);
    steamEngineProvider.setHorsepower(1000);
    steamEngineProvider.setManufacturer('Cummins');
    steamEngineProvider.setCylinders(8);
  });

angular.module('cars', ['carColors'])
  .factory('car', function($log, dieselEngine, tire, carColor) {
    return {
      start: function() {
        $log.info('Starting ' + dieselEngine.type + ' engine with ' + dieselEngine.mpg);
        $log.info('car is using ' + tire.type + ' tire with rating: ' + tire.treadRating);
        $log.info('available colors: ' + carColor.colors);
      }
    };
  });

angular.module('carColors', [])
  .factory('carColor', function() {
    return {
      colors: 'red'
    };
  });

angular.module('engines', [])
  .factory('dieselEngine', function() {
    return {
      type: 'diesel',
      mpg: '35mpg'
    };
  })
  .provider('steamEngine', function() {
    var yearMade;
    var manufacturer;
    var horsepower;
    var cylinders;
    return {
      setYearMade: function(value) {
        yearMade = value;
      },
      setManufacturer: function(value) {
        manufacturer = value;
      },
      setHorsepower: function(value) {
        horsepower = value;
      },
      setCylinders: function(value) {
        cylinders = value;
      },
      $get: function($log) {
        return {
          year: yearMade,
          manufacturer: manufacturer,
          horsepower: horsepower,
          cylinders: cylinders,
          horsepowerPerCylinder: function() {
            return (this.horsepower / this.cylinders);
          },
          start: function() {
            $log.info('this steam engine has ' + this.horsepower + ' horsepower');
            $log.info('with ' + this.cylinders + ' cylinders');
            $log.info('with each cylinder making ' + this.horsepowerPerCylinder() + ' horsepower');
            $log.info('manufactured by ' + this.manufacturer);
            $log.info('made in year ' + this.year);
          }
        };
      }
    };
  });

angular.module('tires', [])
  .factory('tire', function() {
    return {
      type: 'racing',
      treadRating: '50AA'
    };
  });
      
  
