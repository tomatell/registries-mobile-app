(function(angular) {
	'use strict';

	angular.module('MemberyApp', ['ngCordova'] )
	.controller('xpsui:detectDeviceCtrl', [
		"$scope",
		function($scope) {
			if(navigator.userAgent.match(/iPad/i)  == "iPad" || navigator.userAgent.match(/iPhone/i)  == "iPhone") {
				$scope.IsiOS = true;
				$scope.IsMobile = false;
			} else if (navigator.userAgent.match(/Android/i) == "Android"){
				$scope.IsiOS = false;
				$scope.IsMobile = true;
			}
		}
	]);
}(window.angular))