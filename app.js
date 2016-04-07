var app = angular.module('gifGenerator', []);

app.controller('CallController', function($scope, $http) {
  $scope.getGif = function(tag) {
    $http.get(buildApiHtml(tag)).then(function(response) {
      $scope.gif = response.data.data.image_url;
      $scope.tag = "";
    })
  };
});

function buildApiHtml(tag) {
  // Strings to build url
  // First one goes before the tag
  var baseUrl1 = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=';
  // Second one goes after the tag
  var baseUrl2 = '&rating=pg13';
  return baseUrl1 + tag + baseUrl2;
}
