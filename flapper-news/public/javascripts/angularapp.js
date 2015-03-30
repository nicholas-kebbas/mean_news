angular.module('meanNews', ['ui.router'])

app.controller('Mainctrl', [
    '$scope',
    function($scope) {
        $scope.test = "Hello World";
        $scope.posts = [
        {title: 'post 1', upvotes: 5},
        {title: 'post 2', upvotes: 2},
        {title: 'post 3', upvotes: 15}
        ];
        $scope.addPost = function(){
            if (!$scope.title || $scope.title === '') {return; }
            $scope.posts.push({title: $scope.title, upvotes: 0});
            $scope.title = "";
        };
        $scope.incrementUpvotes = function(post) {
            post.upvotes += 1;
        };
    }
    ]);
    
app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);