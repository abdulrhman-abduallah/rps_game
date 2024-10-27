// The first project to actually create on git

function getComputerChoice(max) {
	return Math.floor(Math.random() * max);

}
let computerArrayChoice = ['Rock','Paper','Scissors']

let computerChoice = computerArrayChoice[getComputerChoice(3)]

const result = document.querySelector("#results")
const score = document.querySelector("#score");

let humanChoice = '';

function getHumanChoice() {
	humanChoice = prompt("Please enter your choice: ");
}




let humanScore = 0;
let computerScore = 0;
let rounds = 0;

function playRound(humanChoice, computerChoice){
	rounds++;
	
	if(rounds > 5 ){
		score.textContent ="Game Over";

	}

	else if(humanChoice === "Rock" && computerChoice === "Rock"){
		result.textContent = "It Is a Tie!, this is round number: "+rounds;
	}
	else if(humanChoice === "Rock" && computerChoice === "Paper"){
		result.textContent = "You lose human Paper beats Rock, this is round number: "+rounds;
		computerScore +=1;
	}
	else if(humanChoice === "Rock" && computerChoice === "Scissors"){
		result.textContent = "You win human Rock beats Scissors, this is round number: "+rounds;
		humanScore +=1;
	}else if(humanChoice === "Paper" && computerChoice === "Paper"){
		result.textContent = "It is a Tie!";
	}else if(humanChoice === "Paper" && computerChoice === "Rock"){
		result.textContent = "You win human Paper beats Rocks, this is round number: "+rounds;
		humanScore +=1;
	}else if(humanChoice === "Paper" && computerChoice === "Scissors"){
		result.textContent = "You lose human, Scissors beats Paper, this is round number: " + rounds;
	}else if(humanChoice === "Scissors" && computerChoice === "Rock" ){
		result.textContent = "You lose human, Rock beats Paper, this is round number: "+ rounds;
		computerScore +=1;
	}else if(humanChoice === "Scissors" && computerChoice === "Paper"){
		result.textContent = "You win human Scissors beats Paper, this is round number: "+rounds;
		humanScore +=1;
	}else if(humanChoice === "Scissors" && computerChoice ==="Scissors"){
		result.textContent = "Its a Tie, this is round number: "+rounds;
}
	else if(computerScore > humanScore){
	score.textContent = "computer wins";
	}else{
	score.textContent = "human wins";
}
	

}



function playGame(humanChoice){
	let counter=0;

	computerChoice = computerArrayChoice[getComputerChoice(3)];
//	let humanChoice = prompt("Enter your choice");

	playRound(humanChoice,computerChoice);
	console.log("Computer Choice is: " + computerChoice)

}

const Rock = document.getElementById('Rock');
const Paper = document.querySelector("#Paper");
const Scissors = document.querySelector("#Scissors");

Rock.addEventListener("click",() => {
	let humanChoice = "Rock";
	console.log("Human choice is: "+humanChoice);
	playGame(humanChoice);
});

Paper.addEventListener("click",() => {
	let humanChoice = "Paper";
	console.log("Human choice is: "+humanChoice);

	playGame(humanChoice);
});

Scissors.addEventListener("click",() => {
	let humanChoice = "Scissors";
	console.log("Human choice is: "+humanChoice);

	playGame(humanChoice);

});


