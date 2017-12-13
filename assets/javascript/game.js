$(document).ready(function()
{
	var crystalRandom = 0;
	var numberRandom = 0;
	var score = 0;
	var wins = 0;
	var losses = 0;
	var gameOver = false;
	startGame();
	$(".diamond-image").on("click", function() {
		if (gameOver) ;
			 startGame();
	}
	
