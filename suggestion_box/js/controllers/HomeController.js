/**
 * Created by Dmitriy_Varygin on 04.05.2016.
 */

app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions) {
    $scope.helloWorld = 'Привет, мир (и Angular.js)!';
    $scope.posts = suggestions.posts;
    $scope.addSuggestion = function() {
        if (!$scope.title || $scope.title === "") {
            return;
        }
        $scope.posts.push({
            title: $scope.title,
            upvotes: 0
        });
        $scope.title = '';
    };
    $scope.upVote = function(post) {
        post.upvotes++;
    };
}]);
