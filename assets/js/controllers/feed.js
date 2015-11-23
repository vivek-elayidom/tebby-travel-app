var app = angular.module('app',[]);

app.controller('FeedController', function ($scope) {
  $scope.initFeed = function () {
    TweenLite.to("#gallery-feed", 0, {x: '0%'});
    $('#gallery-feed .grid-item').each(function() {
      var gridHeight = $('#gallery-feed .one-three').width();
      $('#gallery-feed .one-three').height(gridHeight);
      $('#gallery-feed .two-three').height(gridHeight);
      $('#gallery-feed .two-two').height((gridHeight*2)+10);
    });
    $('#gallery-feed .img-hldr').each(function () {
      if ($(this).find('img').length){
        var getImage = $(this).find('img').attr('src');
        $(this).css({"background-image":"url("+getImage+")"});
        $(this).find('img').hide();
      }
    });
    $(".photo-grid").mCustomScrollbar({
      theme:"dark-thin"
    });
  }
  $scope.initFeed();
})
.directive('feed', function() {
  return {
    templateUrl: 'views/feed.html'
  };
});