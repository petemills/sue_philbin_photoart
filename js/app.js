var app = angular.module('sue-philbin-photoart', []);

app.controller("InfoController", function(){
	this.currentInfo = 1;

	this.selectInfo = function(setInfo) {
		this.currentInfo = setInfo;
	};
	this.isSelected = function(infoName) {
		return this.currentInfo === infoName;
	};
});