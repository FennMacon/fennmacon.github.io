$(document).ready(function(){
var currentValue = parseInt($('this').val(), 10);
var newValue = currentValue + 1;


	$('#u1').click(function(){
		$("#stringOne").text(newValue);
	});
	$('#u2').click(function(){
		$("#stringTwo").text(newValue);
	});
	$('#u3').click(function(){
		$("#stringThree").text(newValue);
	});
	$('#u4').click(function(){
		$("#stringFour").text(newValue);
	});
	$('#u5').click(function(){
		$("#stringFive").text(newValue);
	});
	$('#u6').click(function(){
		$("#stringSix").text(newValue);
	});
});