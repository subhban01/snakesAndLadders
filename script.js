const max = 6;
const min = 1;
var currentPos = 0;
var prev = 0;
const delay = 3000;
const ladderMap = {
	4: 14,
	9: 31,
	20: 38,
	28: 84,
	40: 59,
	51: 67,
	63: 81,
	71: 91
}
const snakesMap = {
	17: 7,
	54: 34,
	62: 19,
	64: 60,
	87: 24,
	93: 73,
	95: 75,
	99: 78
}

//initializing snake & ladder boxes
snakeBoxes = Object.keys(snakesMap);
for(var i in snakeBoxes){
	$('.box')[parseInt(snakeBoxes[i])-1].classList.add('danger');
}
ladderBoxes = Object.keys(ladderMap);
for(var i in ladderBoxes){
	$('.box')[parseInt(ladderBoxes[i])-1].classList.add('ladder');
}



function rollDice(){
	return Math.ceil(Math.random()*(max-min+1));
}

function play(){
	// $('.roll').hide();
	$('.roll').attr('onclick','').unbind('click');
	$('.roll').text('please wait...');
	$('.roll').css('opacity', '0.5');

	var currentRoll = rollDice();
	$('.display').text('You rolled '+currentRoll);
	$('.display').show();
	setTimeout(function(){
		$('.display').fadeOut(delay);
	}, 1000);

	if(currentPos+currentRoll <= 100)
		currentPos+=currentRoll;
	
	if(currentPos == 100)
		console.log('You Win!!');

	if(ladderMap[currentPos]){
		var diff = ladderMap[currentPos] - currentPos;

		currentPos = ladderMap[currentPos];
	}

	if(snakesMap[currentPos]){
		currentPos = snakesMap[currentPos];
	}

	element = document.getElementsByClassName('box')[currentPos-1];
		console.log('roll', currentRoll, 'currentPos', currentPos);
		element.classList.add("selected");

		prevE = document.getElementsByClassName('box')[prev];
		prevE.classList.remove("selected");
		prev = currentPos-1;

	setTimeout(function(){
		$('.roll').css('opacity', '1');
		$('.roll').text('ROLL DICE');
		$('.roll').on('click', play);
	},delay-1500);
}





