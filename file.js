
const choices = ['rock', 'paper', 'scissors'];
let playerChoice = '';
const title = document.querySelector('.title');

const rock = document.querySelector('img.rock');
const paper = document.querySelector('img.paper');
const scissors = document.querySelector('img.scissors');

rock.addEventListener('click', onClick);
paper.addEventListener('click', onClick);
scissors.addEventListener('click', onClick);

const h2 = document.querySelector('h2');
const h3_player = document.querySelector('.h3-player');
const h3_computer = document.querySelector('.h3-computer');

function onClick(e) {
    playerChoice = `${e.target.className}`;

    document.querySelector(`img.${e.target.className}`).classList.add('newClass');

    //document.querySelector(`img.${e.target.className}`).style.boxShadow = "inset 5px 5px 10px #496070, inset -5px -5px 10px #7e9cad";
    //document.querySelector(`img.${e.target.className}`).style.backgroundImage = "linear-gradient( to bottom, rgba( 72, 105, 125, 1),  rgba(127, 142, 149, 1))";

    computerCall();
}

//paper.addEventListener('click', paperFun);
// function paperFun (e) {
//     playerChoice = `${e.target.className}`; 
//     console.log(playerChoice);
//     console.log(e.type);
//     console.log(e);
// }

function computerCall() {
    let computerChoice = Math.floor(Math.random() * choices.length);
    computerChoice = choices[computerChoice];

    let computerChoiceDiv = document.querySelector(`.${computerChoice}`);
    computerChoiceDiv.classList.add('chosenDiv');
    //computerChoiceDiv.style.boxShadow = "5px 5px 5px 5px blue";

    compareChoices(computerChoice, playerChoice);

    h2.textContent = compareChoices(computerChoice, playerChoice);
    h2.style.color = "white";

    h3_computer.textContent = `Computer's choice: ${computerChoice}`;
    h3_player.textContent = `Your choice: ${playerChoice}`;

    playAgain();
}

const btn = document.createElement('button');
btn.textContent = 'Play agaain!';
btn.addEventListener('click', againBtn);

function playAgain() {
    
    title.appendChild(btn);
    
    //rock.removeAttribute('style');
    //rock.classList.ad
};

function againBtn() {
    rock.classList.remove('newClass', 'chosenDiv');
    paper.classList.remove('newClass', 'chosenDiv');
    scissors.classList.remove('newClass', 'chosenDiv');

    h2.textContent = 'Make choice:';
    h2.style.color = "black";
    h3_computer.textContent = '';
    h3_player.textContent = '';
}



//let playAgain = document.createElement('style')

function compareChoices (computerChoice, playerChoice) {
    if(computerChoice == playerChoice) 
        return "It's Tie!";
    else if (computerChoice == 'rock' && playerChoice == 'scissors')
        return "You LOST!";
    else if (computerChoice == 'rock' && playerChoice == 'paper')
        return "You WON!!!";
    else if (computerChoice == 'paper' && playerChoice == 'scissors')
        return "You WON!!!";
    else if (computerChoice == 'paper' && playerChoice == 'rock')
        return "You LOST!";
    else if (computerChoice == 'scissors' && playerChoice == 'rock')
        return "You WON!!!"
    else if (computerChoice == 'scissors' && playerChoice == 'paper')
        return "You LOST!";
}