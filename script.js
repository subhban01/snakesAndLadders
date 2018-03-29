const max = 6;
const min = 1;
var currentPos = 0;
var prev = 0;
const snakeLadderMap = {
	4: 14,
	9: 31,
	20: 38,
	28: 84,
	40: 59,
	51: 67,
	63: 81,
	71: 91,
	17: 7,
	54: 34,
	62: 19,
	64: 60,
	87: 24,
	93: 73,
	95: 75,
	99: 78
}


function rollDice(){
	return Math.ceil(Math.random()*(max-min+1));
}

function play(){
	var currentRoll = rollDice();
	if(currentPos+currentRoll <= 100)
		currentPos+=currentRoll;
	
	if(currentPos == 100)
		console.log('You Win!!');

	if(snakeLadderMap[currentPos]){
		currentPos = snakeLadderMap[currentPos];
	}

	element = document.getElementsByTagName('div')[currentPos];
		console.log('xxxx', currentPos);
		element.classList.add("selected");

		prevE = document.getElementsByTagName('div')[prev];
		prevE.classList.remove("selected");
		prev = currentPos;
	return currentPos;
}