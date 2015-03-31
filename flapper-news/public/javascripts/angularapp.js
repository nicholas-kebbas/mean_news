angular.module('meanNews', ['ui.router'])

app.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}]);

app.controller('Mainctrl', [
    '$scope',
    'posts',
    function($scope, posts){
        $scope.test = "Hello World";
        $scope.posts = [
        {title: 'post 1', upvotes: 5},
        {title: 'post 2', upvotes: 2},
        {title: 'post 3', upvotes: 15}
        ];
        $scope.addPost = function(){
            if (!$scope.title || $scope.title === '') {return; }
            $scope.posts.push({
              title: $scope.title,
              link: $scope.link,
              upvotes: 0
            });
            $scope.title = '';
            $scope.link = '';
        };
        $scope.incrementUpvotes = function(post) {
            post.upvotes += 1;
        };
        $scope.posts = posts.posts;
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