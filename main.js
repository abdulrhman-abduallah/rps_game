// The first project to actually create on git
console.log("Hello, Rayan! I love you.");

function getComputerChoice(max) {
	return Math.floor(Math.random() * max);

}
let computerArrayChoice = ['Rock','Paper','Scissors']

let computerChoice = computerArrayChoice[getComputerChoice(3)]

//

let humanChoice = '';

function getHumanChoice() {
	humanChoice = prompt("Please enter your choice: ");
}




let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){
	if(humanChoice === "Rock" && computerChoice === "Rock"){
		console.log("It Is a Tie!");
	}
	else if(humanChoice === "Rock" && computerChoice === "Paper"){
		console.log("You lose human Paper beats Rock")
		computerScore +=1;
	}
	else if(humanChoice === "Rock" && computerChoice === "Scissors"){
		console.log("You win human, Rock beats Scissors");
		humanScore +=1;
	}else if(humanChoice === "Paper" && computerChoice === "Paper"){
		console.log("It is a Tie!");
	}else if(humanChoice === "Paper" && computerChoice === "Rock"){
		console.log("You win human, Paper beats Rocks");
		humanScore +=1;
	}else if(humanChoice === "Paper" && computerChoice === "Scissors"){
		console.log("You lose human, Scissors beats Paper ");
	}else if(humanChoice === "Scissors" && computerChoice === "Rock" ){
		console.log("You lose human, Rock beats Paper");
		computerScore +=1;
	}else if(humanChoice === "Scissors" && computerChoice === "Paper"){
		console.log("You win human, Scissors beats Paper");
		humanScore +=1;
	}else if(humanChoice === "Scissors" && computerChoice ==="Scissors"){
		console.log("Its a Tie");
	}

}



function playGame(){
	let counter=0;
	while(counter < 5){
		computerChoice = computerArrayChoice[getComputerChoice(3)];
		let humanChoice = prompt("Enter your choice");
		playRound(humanChoice,computerChoice);
		counter++;
	}
	if(computerScore > humanScore){
		console.log("computer wins");
	}else{
		console.log("human wins");
	}
}


playGame();