/**
 * Created by hevbevt on 16-7-6.
 */
var PollListCtrl = function ($scope) {
    $scope.pulls = [];
};
var PollItemCtrl = function($scope, $routeParams) {
    $scope.pull = [];
    $scope.vote = function () {

    }
};

var PollNewCtrl = function ($scope) {
    $scope.poll = {
        question: '',
        choices: [{ text: '', }]
    }
};