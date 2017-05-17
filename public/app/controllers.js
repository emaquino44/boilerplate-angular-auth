angular.module('R-aaaCtrls', ['R-aaaServices'])
    .controller('HomeCtrl', ['$scope', 'R-aaa', function($scope, R - aaa) {
        $scope.r - aaas = [];

        R - aaa.query(function success(data) {
            $scope.r - aaas = data;
        }, function error(data) {
            console.log(data);
        });

        $scope.deleteR - aaa = function(id, r - aaasIdx) {
            R - aaa.delete({ id: id }, function success(data) {
                $scope.r - aaas.splice(r - aaasIdx, 1);
            }, function error(data) {
                console.log(data);
            });
        };
    }])
    .controller('ShowCtrl', ['$scope', '$stateParams', 'R-aaa', function($scope, $stateParams, R - aaa) {
        $scope.r - aaa = {};

        R - aaa.get({ id: $stateParams.id }, function success(data) {
            $scope.r - aaa = data;
        }, function error(data) {
            console.log(data);
        });
    }])
    .controller('NewCtrl', ['$scope', '$location', 'R-aaa', function($scope, $location, R - aaa) {
        $scope.r - aaa = {
            title: '',
            description: '',
            image: ''
        };

        $scope.createR - aaa = function() {
            R - aaa.save($scope.r - aaa, function success(data) {
                $location.path('/');
            }, function error(data) {
                console.log(data);
            });
        };
    }])
    .controller('NavCtrl', ['$scope', function($scope) {
        $scope.logout = function() {
            // to implement
        };
    }])
    .controller('SignupCtrl', ['$scope', function($scope) {
        $scope.user = {
            email: '',
            password: ''
        };
        $scope.userSignup = function() {
            // to implement
        };
    }])
    .controller('LoginCtrl', ['$scope', function($scope) {
        $scope.user = {
            email: '',
            password: ''
        };
        $scope.userLogin = function() {
            // to implement
        };
    }]);
