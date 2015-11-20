var app = angular.module('app',[]);

app.controller('BucketlistController', function ($scope) {
	$scope.initBucketlist = function () {
		pageHeight = $(window).outerHeight(),
		headerHeight = $('header.navbar').outerHeight(),
		sectionTitle = $('.bucketlist-section h2').outerHeight();

		TweenLite.to("#bucketlist, #listing", 0, {x: '100%'});
		$('.bucketlistScrll').css('height', pageHeight - (headerHeight+sectionTitle+20));
		$(".bucketlistScrll").mCustomScrollbar({
			theme:"dark-thin"
		});
	},
	$scope.list = [
		{title: "Movenpick Hotel & Spa", type:"5 Star Hotel", address: "115, Gokula Extension, HMT Road, Near BEL Circle, Bengaluru, Karnataka 560054", phone: "080 4300 1000", rate: "6686", duration: "per night"},
		{title: "Movenpick Hotel & Spa", type:"5 Star Hotel", address: "115, Gokula Extension, HMT Road, Near BEL Circle, Bengaluru, Karnataka 560054", phone: "080 4300 1000", rate: "6686", duration: "per night"},
		{title: "Movenpick Hotel & Spa", type:"5 Star Hotel", address: "115, Gokula Extension, HMT Road, Near BEL Circle, Bengaluru, Karnataka 560054", phone: "080 4300 1000", rate: "6686", duration: "per night"},
		{title: "Movenpick Hotel & Spa", type:"5 Star Hotel", address: "115, Gokula Extension, HMT Road, Near BEL Circle, Bengaluru, Karnataka 560054", phone: "080 4300 1000", rate: "6686", duration: "per night"},
		{title: "Movenpick Hotel & Spa", type:"5 Star Hotel", address: "115, Gokula Extension, HMT Road, Near BEL Circle, Bengaluru, Karnataka 560054", phone: "080 4300 1000", rate: "6686", duration: "per night"},
		{title: "Movenpick Hotel & Spa", type:"5 Star Hotel", address: "115, Gokula Extension, HMT Road, Near BEL Circle, Bengaluru, Karnataka 560054", phone: "080 4300 1000", rate: "6686", duration: "per night"},
		{title: "Movenpick Hotel & Spa", type:"5 Star Hotel", address: "115, Gokula Extension, HMT Road, Near BEL Circle, Bengaluru, Karnataka 560054", phone: "080 4300 1000", rate: "6686", duration: "per night"}
	],
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
	}
})
.directive('bucketlist', function() {
	return {
		templateUrl: 'views/bucketlist.html'
	};
});