var app = angular.module('gifGenerator', []);

app.controller('CallController', function($scope, $http) {
  $scope.getGif = function(tag) {
    console.log('tag', tag);
    $http.get(buildApiHtml(tag)).then(function(response) {
      console.log(response);
      $scope.gif = response.data.data.image_url;
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

//
//   // Used to build image urls
//   var imageHTMLbase = '<img src = "';
//
//   // Initialize function to make ajax call to giphy
//   function getGifWithTag(tag) {
//     // Strings to build url
//     // First one goes before the tag
//     var baseUrl1 = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=';
//     // Second one goes after the tag
//     var baseUrl2 = '&rating=pg13';
//
//     // Make ajax call
//     $.ajax({
//     url: baseUrl1 + tag + baseUrl2,
//     type: 'GET'
//
//     }).done(function(response){
//       // When response is received
//       // Assemble image url with info from response
//       var html = imageHTMLbase + response.data.image_url;
//       html += '" />';
//       // Hide last gif
//       $('.results').children().last().hide();
//       // Load new gif on page
//       $('.results').append(html);
//
//
//     }).fail(function(response){
//       // Hopefully this will never happen
//       alert('Server error');
//     })
//   }
// })
