var no_of_dice = 1;
var roll_Count = 0;
var point = 0;
var sum = 0;
var winCount = 0;
var loseCount = 0;
var checkWinResult = false;
var checkLoseResult = false;

function dice_number() {

    var current_number = document.getElementById("dice_btn").innerHTML;
    no_of_dice = current_number.replace("No. of dice: ","");
    
    if (document.getElementById("dice_btn").innerHTML == "No. of dice: 1") {
        
        document.getElementById("dice_btn").innerHTML = "No. of dice: 2";
        current_number = document.getElementById("dice_btn").innerHTML;
        no_of_dice = current_number.replace("No. of dice: ",""); 

    }
    
    else {
        
        document.getElementById("dice_btn").innerHTML = "No. of dice: 1";
        current_number = document.getElementById("dice_btn").innerHTML;
        no_of_dice = current_number.replace("No. of dice: ","");
        
    }
    
}

function roll() {
    // Math.floor((Math.random() * 10) + 1);
    var randoms = [];
    var rolls_value;
    
	var sound = new Audio("audio/zar.mp3");
	sound.play();
	
    if (no_of_dice == 1) {
        randoms[0] = (Math.floor((Math.random() * 6) + 1)).toString();
        rolls_value = randoms[0];
    }
    else {
        for (i = 0;i<2;i++)
            randoms[i] = (Math.floor((Math.random() * 6) + 1)).toString();
        
        rolls_value = randoms[0] + ',' + randoms[1];
		roll_Count++;
    }
	var die1 = parseInt(randoms[0], 10);
	var die2 = parseInt(randoms[1],10);
    var sum = die1 + die2;
	document.getElementById("roll").innerHTML = rolls_value;
	document.getElementById("sumText").value = sum;   
	return sum;
}

function crap() {	// main funtion
    if (roll_Count == 0) {	// roll first time
        sum = roll(); 
 
        if(sum == 7 || sum == 11){
        	win();
			roll_Count = 0;
        }else
        	if(sum == 2 || sum == 3 || sum == 12){
        		lose();
				roll_Count = 0;
        	}else {							//need roll again
        		point = sum;
        		document.getElementById("pointText").value = point; // show point
        	}   
    }else
    	if (roll_Count != 0) {	
    		rollAgain();
        }
}

function rollAgain() {	//function roll again
    document.getElementById("roll_btn").innerHTML = "ROLL!";
    sum = roll();
    if (sum == 7) {
        lose();
    }
    else if (point == sum) {
        win(); 
    }
}

function win() {	//function show win the game
    document.getElementById("roll").innerHTML = "You Win";
    document.getElementById("pointText").value = point;// change text of roll button
    document.getElementById("roll_btn").innerHTML = "Play Again?";
    var sound = new Audio("audio/win.mp3");
    sound.play();
    winCount++;
    document.getElementById("winText").value = winCount;
    
}

function lose() {	//function show lose the game
	document.getElementById("roll").innerHTML = "You Lose";
    document.getElementById("pointText").value = point;// change text of roll button
	document.getElementById("roll_btn").innerHTML = "Play Again?";
	var sound = new Audio("audio/lose.mp3");
    sound.play();
    loseCount++;
    document.getElementById("loseText").value = loseCount;
	if (roll_Count==1){
		roll_Count=0;
	}
}