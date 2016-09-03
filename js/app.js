var app = angular.module('paginationModule', []);

app.controller('PaginationController', function($scope, dataFactory) {
    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.totalPages = 0;
    $scope.pagedData = [];

$scope.pageButtonDisabled = function(dir) {
    if (dir == -1) {
        return $scope.currentPage == 0;
    }
    return $scope.currentPage >= dataFactory.data.length/$scope.pageSize - 1;
}

$scope.paginate = function(nextPrevMultiplier) {
    $scope.currentPage += (nextPrevMultiplier * 1);
    $scope.pagedData = dataFactory.data.slice($scope.currentPage*$scope.pageSize);
}

function init() {
    $scope.totalPages = Math.ceil(dataFactory.data.length/$scope.pageSize);
    $scope.pagedData = dataFactory.data;
}

init();

});

app.factory('dataFactory', function() {
    var factory = {};
    factory.data = [];

    function init() {
        for (var i = 1; i <= 1200; i ++) {
            factory.data.push("first name"+ i + ": " + "last name"+ i + ": " + "address"+ i + ": " + "email" + i);
        }
    }

    init();

    return factory;
});