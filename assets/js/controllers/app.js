var app = angular.module('logAloud',[]);

app.controller('PageController', ['$scope', function($scope){
	
}]);

app.directive('pageHeader', function() {
	return {
		templateUrl: 'views/header.html'
	}
})
.directive('bucketList', function() {
	return {
		templateUrl: 'views/bucketlist.html'
	}
})
.directive('shareGroups', function() {
	return {
		templateUrl: 'views/share-groups.html'
	}
})
.directive('discussionList', function() {
	return {
		templateUrl: 'views/discussion-list.html'
	}
});


app.controller('HeaderController', function ($scope) {
	activeBucketlist = 0;
	$scope.blTrigger = function ($event) {
		$event.preventDefault();
		setTimeout(function() {
			if (activeBucketlist === 0){
				TweenLite.to("#gallery-feed", 0, {x: '0%'});
				TweenLite.to("#gallery-feed", 1, {x: '100%', delay: 1.2});
				TweenLite.to("#bucketlist", 1, {x: '-100%', delay: 0.2});
				TweenLite.to("#bucketlist", 1, {x: '0%', delay: 1.2});
				TweenLite.to("#listing", 1, {x: '100%', delay: 0.2});
			} else if (activeBucketlist === 1) {
				TweenLite.to("#gallery-feed", 1, {x: '100%', delay: 0.2});
				TweenLite.to("#bucketlist", 1, {x: '0%', delay: 0.2});
				TweenLite.to("#listing", 1, {x: '100%', delay: 0.2});
			}
			activeBucketlist = 1;
			TweenLite.to("#discussion-list, #trip-info", 2, {x: '200%', delay: 0.2});
			TweenLite.to("#trip-info", 0, {opacity: 0, delay: 1.2});
			TweenLite.to("#share-groups", 2, {x: '200%', delay: 0.2});

			TweenLite.to("#bucketlist .expand-btn", 0.5, {left: '-15'});
			TweenLite.to("#share-groups .expand-btn", 0.5, {left: '-15', delay: 0.2});
		}, 30);
	}
});

// Feed Controller
app.controller('FeedController', function ($scope, $window) {
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
		$("#gallery-feed .photo-grid").mCustomScrollbar({
          theme:"dark-thin"
        });
	};
	$scope.initFeed();
})
.directive('galleryFeed', function() {
	return {
		templateUrl: 'views/feed.html'
	}
});

// Bucketlist Controller
app.controller('BucketlistController', function ($scope, $compile, $http) {
	$scope.list = [],
	$scope.initBucketlist = function () {
		$http({
			method: 'GET',
			url: 'data/listings.json'
		}).success(function(data) {
			$scope.list = data;
			pageHeight = $(window).outerHeight(),
			headerHeight = $('header.navbar').outerHeight(),
			sectionTitle = $('.bucketlist-section h2').outerHeight();

			TweenLite.to("#bucketlist, #listing", 0, {x: '100%'});
			$('.bucketlistScrll').css('height', pageHeight - (headerHeight+sectionTitle+70));
			$(".bucketlistScrll").mCustomScrollbar({
				theme:"dark-thin"
			});
		});
	},
	$scope.collapse = function () {
		TweenLite.to("#bucketlist", 1, {x: '100%', delay: 0.2});
		TweenLite.to("#share-groups", 2, {x: '200%', delay: 0.2});
		TweenLite.to("#gallery-feed", 1, {x: '0%', delay: 0.2});
		TweenLite.to("#discussion-list, #trip-info", 2, {x: '200%', delay: 0.2});
		TweenLite.to("#trip-info", 0, {opacity: 0, delay: 1.2});
	},
	$scope.share = function () {
		TweenLite.to("#share-groups", 1, {x: '0%', delay: 0.2});
		TweenLite.to("#discussion-list, #trip-info", 2, {x: '200%', delay: 0.2});
		TweenLite.to("#trip-info", 0, {opacity: 0, delay: 1.2});
	},
	$scope.view = function () {
		TweenLite.to("#listing", 1, {x: '-100%', delay: 0.2});
		TweenLite.to("#listing", 1, {x: '0%', delay: 1.2});
		TweenLite.to("#bucketlist", 1, {x: '100%', delay: 1.2});

		TweenLite.to("#gallery-feed", 1, {x: '100%', delay: 0.2});
		TweenLite.to("#share-groups", 2, {x: '200%', delay: 0.2});
		TweenLite.to("#discussion-list, #trip-info", 2, {x: '200%', delay: 0.2});
		TweenLite.to("#trip-info", 0, {opacity: 0, delay: 1.2});

		TweenLite.to("#bucketlist .expand-btn", 0.5, {left: '0%', delay: 2});
	},
	$scope.initBucketlist();
});

// Share Groups Controller
app.controller('ShareGroupsController', function ($scope) {
	$scope.initShareGroups = function () {
		pageHeight = $(window).outerHeight(),
		headerHeight = $('header.navbar').outerHeight(),
		titleHeight = $('#share-groups').find('h2').outerHeight(),
		sectionWidth = $('#share-groups').width(),
		searchHeight = $('#share-groups').find('.sec-chat').outerHeight();

		TweenLite.to("#share-groups, #trip-info", 0, {x: '200%'});

		$('#share-groups .scrlHeight').height(pageHeight-(headerHeight+titleHeight+chatHeight+15));
		$('#share-groups .sec-chat').css({'width': sectionWidth});

		$(".scrlHeight").mCustomScrollbar({
			theme:"dark-thin",
		});

		TweenLite.to("#share-groups", 0, {x: '200%'});
	},
	$scope.list = [
		{title: "Visit to-Nainital Mussoorie and Dehradum"},
		{title: "ABDF"},
		{title: "GHNG"},
		{title: "AHSR"},
		{title: "4785"},
		{title: "qwer"},
		{title: "Visit to-Nainital Mussoorie and Dehradum"},
		{title: "awed-1234"},
		{title: "zasw-7854"},
		{title: "rewt-rets"}
	],
	$scope.collapse = function () {
		TweenLite.to("#share-groups", 2, {x: '200%', delay: 0.2});
	},
	$scope.viewDiscussion = function ($event) {
		$event.preventDefault();
		TweenLite.to("#discussion-list", 1, {x: '-100%', delay: 0.2});
		TweenLite.to("#share-groups", 1, {x: '100%', delay: 1.2});
		TweenLite.to("#discussion-list", 1, {x: '0%', delay: 1.2});

		TweenLite.to("#share-groups .expand-btn", 0.5, {left: '0%', delay: 1.2});
	}
});

// Discussion List Controller
app.controller('DiscussionListController', function ($scope, $timeout) {
	$scope.initDiscussionList = function () {
		sectionWidth = $('#discussion-list').width(),
		chatHeight = $('#discussion-list').find('.sec-chat').outerHeight();

		TweenLite.to("#discussion-list", 0, {x: '200%'});

		$('.img-wrp').each(function() {
			if(!($(this).hasClass('prflImg'))) {
				imgs = $(this).find('img');
				var slideImages = imgs.attr('src'),
				pageHeight = $(window).height()-47;

				$(this).css({'height': pageHeight/2.55});
				$(this).css({'background-image': 'url("' + slideImages + '")'});
				imgs.hide();
			}
			else {
				pageHeight = $(window).height()-47;
				$(this).css({'height': pageHeight/2.71});
				var imgSrc = $(this).find('.profile-bg').attr('src');
				$(this).css({'background-image':'url('+imgSrc+')'});
				$(this).find('.profile-bg').hide();
			}
		});

		$("#discussion-list").mCustomScrollbar({
			theme:"dark-thin",
			callbacks:{
				whileScrolling:function(){ 
					valScrlAnm(this.mcs.topPct);
				},
				alwaysTriggerOffsets:false,
				onScroll: function() {
					if($(this).data("mCS").trigger==="external"){
						TweenLite.to(".discussion .logs-tab", 0, {css: {opacity: "0", display: "none"}});
						TweenLite.to(".discussion .new-log", 1, {css: {opacity: "1", display: "block"}});
						$("#discussion-list").mCustomScrollbar("disable", true);
						$('#discussion-list .fixed-ch').css({'height': ''});
						$('#discussion-list .img-wrp').css({'height': ''});
						$('#discussion-list .tab-body').css({'padding-top': 88});
						$('#discussion-list .nav-tabs').addClass('tab-disabled');
						$('.media-lg').mediaelementplayer({
							features: ['playpause','progress','volume'],
							videoWidth: 320,
							videoHeight: 180,
							audioWidth: 260,
							audioHeight: 30
						});
						$('.media-xs').mediaelementplayer({
							features: [],
							videoWidth: 80,
							videoHeight: 60,
							audioWidth: 80,
							audioHeight: 60
						});
					} else { }
				}
			}
		});

		crrntHt = $('#discussion-list .img-wrp').height(),

		$('#discussion-list .tab-body').css({'padding-top': crrntHt+40});
		$('#discussion-list .fixed-ch').css({'height': crrntHt+40, 'width': sectionWidth});
		$('#discussion-list').css({'padding-bottom': chatHeight});

		$('#discussion-list .sec-chat').css({'width': sectionWidth});
		setTimeout(function(){ 
			$('.fixed-ch').css({'height': crrntHt+44, 'width': sectionWidth});
		}, 800);

		function valScrlAnm(recevedVl) {
			$('#discussion-list .fixed-ch').css({'height': crrntHt - ((recevedVl/80)*crrntHt)+44, 'min-height': 88});
			$('#discussion-list .img-wrp').css({'height': crrntHt - ((recevedVl/80)*crrntHt), 'min-height': 44, 'background-position-y': 0 - recevedVl});
		}
	},
	$scope.collapse = function () {
		TweenLite.to("#discussion-list", 1, {x: '100%', delay: 0.2});
		TweenLite.to("#share-groups", 1, {x: '0%', delay: 0.2});

		TweenLite.to("#share-groups .expand-btn", 0.5, {left: '-15', delay: 0.2});
	}
	$timeout($scope.initDiscussionList(), 0);
});