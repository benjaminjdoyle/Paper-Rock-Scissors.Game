var userChoice = prompt("Do you choose rock, paper, scissors or rope?");
console.log(userChoice);
var computerChoice = Math.random();
if (computerChoice < 0.25) {
	computerChoice = "rock";
} 
else if(computerChoice <= 0.5) {
	computerChoice = "paper";
} 
else if(computerChoice <= 0.75) {
	computerChoice = "scissors";
} 
else {
	computerChoice = "rope";
} 
console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2){
    
    if (choice1 === choice2) {
        return "The result is a tie!";
    }
    else if (choice1 === 'rock'){
        if (choice2 === 'scissors'){
            return "paper wins";
        }
    }
    else if (choice1 === "paper"){
        if (choice2 === "rock"){
            return 'paper wins';
        }
        else {
            return "scissors wins";
        }
    }
    else if (choice1 === "scissors"){
        if (choice2 === "rock"){
            return "rock wins";
        }
        else {
            return "scissors wins";
        }
    }
    else {
        return "invalid entry, please choose rock, paper or scissors;"
    }
};
compare(userChoice,computerChoice);
