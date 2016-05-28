'use strict';
// user model and related controllers
angular.module('swigit.post_mdl', [])

  .controller('post_feed_ctrl',['$scope',function($scope) {
    $scope.posts = [
      {
        title: 'Fake feed array...',
        fullname: 'L. M. Welinder',
        username: 'lukas',
        feed: null,
        url_slug: 'random_postname',
        published: 'May 19, 2016',
        content: 'This is an exerpt'
      },
      {
        title: 'Totally not a fake',
        fullname: 'Sam R.',
        username: 'lukas',
        feed: null,
        url_slug: 'random_postname',
        published: 'May 31, 2016',
        content: 'Seriously guys, this is for real.'
      },
      {
        title: 'Fake feed array...',
        fullname: 'L. M. Welinder',
        username: 'lukas',
        feed: null,
        url_slug: 'random_postname',
        published: 'May 19, 2016',
        content: 'This is an exerpt'
      }
    ];

  }])

  .controller('post_body_ctrl',['$scope',function($scope) {
    $scope.post = {
        title: 'Fake post body...',
        fullname: 'L. M. Welinder',
        username: 'lukas',
        feed: null,
        url_slug: 'random_postname',
        published: 'May 19, 2016',
        content: 'This is an exerpt'
      };
  }])

  .controller('post_edit_ctrl',['$scope', 'data_fac', function($scope, data_fac) {
    $scope.post = {};
    angular.extend($scope, data_fac); 
    $scope.logParam = function(param){
      console.log(param); 
      console.log("Post: ", $scope.post); 
      console.log("Post title: ", $scope.post.title); 
    }
  }]);