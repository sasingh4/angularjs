'use strict';

/**
 * @ngdoc function
 * @name healthliveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the healthliveApp
 */

angular.module('healthliveApp').controller('MainCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;
  var baseURL='http://lorempixel.com/960/450/';

  $scope.addSlide = function() {
    slides.push({
      image: baseURL+'sports/',
      text: '7 ways to stay fit',
      id: currIndex++
    });
 
  };
  var mcurrIndex = 0;
   $scope.slides = [
		  {text:'7 ways to stay fit', image:baseURL+'sports/',id: mcurrIndex++},
		  {text:'Healthy Food', image:baseURL+'food/',id: mcurrIndex++},
		  {text:'Relaxing Holidays', image:baseURL+'nature/',id: mcurrIndex++}
		 

		 ];

	// Model for the 3 content blocks
 baseURL='http://lorempixel.com/200/200/';
		$scope.content=[
			{
				img:baseURL+'people',
				title:'About Us',
				summary:'We are good, we are the best out there'
			},
			{
				img:baseURL+'business',
				title:'Our Services',
				summary:'We offer advice on staying Healthly, what to eat...what are the best exercises for you etc.'
			},
			{
				img:baseURL+'transport',
				title:'Contact Us',
				summary:'#111, Good Health Blvd, Happy Place, Antartica, Zip-432167'
			}
		];	 

});