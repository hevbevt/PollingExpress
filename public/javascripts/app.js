/**
 * Created by hevbevt on 16-7-6.
 */
var polls = angular.module('polls', ['ngRoute']);
polls.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/polls', {
            templateUrl: 'partials/list.html',
            controller: PollListCtrl
        })
        .when('/poll/:pollId', {
            templateUrl: 'partials/item.html',
            controller: PollItemCtrl
        })
        .when('/new', {
            templateUrl: 'partials/new.html',
            controller: PollNewCtrl
        })
        .otherwise({
            redirectTo: '/polls'
        });
}]);
