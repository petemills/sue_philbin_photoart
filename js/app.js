var app = angular.module('sue-philbin-photoart', ['ngAnimate']);

app.controller("InfoController", function(){
	this.currentInfo = 'aboutSue';

	this.selectInfo = function(setInfo) {
		this.currentInfo = setInfo;
	};
	this.isSelected = function(infoName) {
		return this.currentInfo === infoName;
	};
});

app.controller("GalleryController", function(){
	this.currentImage = 1;

	this.selectImage = function(setImage) {
		this.currentImage = setImage;
	};
	this.isSelected = function(imageNum) {
		return this.currentImage === imageNum;
	};
});