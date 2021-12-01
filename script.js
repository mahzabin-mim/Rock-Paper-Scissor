// variable declaration
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const humanChoice = document.querySelector('.human-choice');
const computerChoice = document.querySelector('.computer-choice');
const nextBtn = document.querySelector('.next-btn');
const reloadBtn = document.querySelector('.reload-btn');

let humanScore = document.querySelector('#human-score');
let computerScore = document.querySelector('#computer-score');
let HUMANSCORE = Number(humanScore.innerHTML);
let COMPUTERSCORE = Number(computerScore.innerHTML);

const rpsScreen = document.querySelector('.rps-screen');
const playerOption = document.querySelector('.player-option');
const fiveRound = document.querySelector('.five-round');

const tenRound = document.querySelector('.ten-round');
const unlimited = document.querySelector('.unlimited'); 
let clickCount = 0;
let roundNumber;



//addEventListener
rock.addEventListener('click', buttonClicked);
paper.addEventListener('click', buttonClicked);
scissors.addEventListener('click', buttonClicked);

nextBtn.addEventListener('click', nextBtnClicked);
reloadBtn.addEventListener('click', reloadBtnClicked);

fiveRound.addEventListener('click', fiveRoundFunc);
tenRound.addEventListener('click', tenRoundFunc);
unlimited.addEventListener('click', unlimitedFunc);


// function
function buttonClicked() {
    if(humanChoice.childNodes.length === 1) {
        let humanChosen = document.createElement('div');
        humanChosen.innerHTML = this.innerHTML;
        humanChosen.classList.add('human-chosen');
        
        humanChoice.appendChild(humanChosen);


        let rpsArray = [rock, paper, scissors];
        let randomIndex = Math.floor(Math.random() * 3);
        
        let computerChosen = document.createElement('div');
        computerChosen.innerHTML = rpsArray[randomIndex].innerHTML;
        computerChosen.classList.add('computer-chosen');

        computerChoice.appendChild(computerChosen);


        rpsScreen.classList.add('visible');
        


        //scoring

        if(humanChosen.innerHTML.includes('paper') && computerChosen.innerHTML.includes('scissors')) {
            COMPUTERSCORE += 1;
            computerChosen.style.backgroundColor = 'lightgreen';
            humanChosen.style.backgroundColor = 'tomato';
        } else if(humanChosen.innerHTML.includes('scissors') && computerChosen.innerHTML.includes('paper')) {
            HUMANSCORE += 1;
            computerChosen.style.backgroundColor = 'tomato';
            humanChosen.style.backgroundColor = 'lightgreen';
        }

        if(humanChosen.innerHTML.includes('paper') && computerChosen.innerHTML.includes('rock')) {
            HUMANSCORE += 1;
            computerChosen.style.backgroundColor = 'tomato';
            humanChosen.style.backgroundColor = 'lightgreen';
        } else if(humanChosen.innerHTML.includes('rock') && computerChosen.innerHTML.includes('paper')) {
            COMPUTERSCORE += 1;
            computerChosen.style.backgroundColor = 'lightgreen';
            humanChosen.style.backgroundColor = 'tomato';
        }

        if(humanChosen.innerHTML.includes('rock') && computerChosen.innerHTML.includes('scissors')) {
            HUMANSCORE += 1;
            computerChosen.style.backgroundColor = 'tomato';
            humanChosen.style.backgroundColor = 'lightgreen';
        } else if(humanChosen.innerHTML.includes('scissors') && computerChosen.innerHTML.includes('rock')) {
            COMPUTERSCORE += 1;
            computerChosen.style.backgroundColor = 'lightgreen';
            humanChosen.style.backgroundColor = 'tomato';
        }

        if(humanChosen.innerHTML === computerChosen.innerHTML) {
            HUMANSCORE += 0;
            COMPUTERSCORE += 0;
            computerChosen.style.backgroundColor = 'lightgrey';
            humanChosen.style.backgroundColor = 'lightgrey';
        }


        humanScore.innerHTML = HUMANSCORE;
        computerScore.innerHTML = COMPUTERSCORE;

        clickCount += 1;
        console.log(clickCount);

        if((clickCount === roundNumber)) {
            nextBtn.style.display = 'none';

            const resultText = document.createElement('p');
            resultText.classList.add('result-text');
            
            if(HUMANSCORE > COMPUTERSCORE){
                resultText.innerHTML = 'You Won! :D';
            } else if(HUMANSCORE < COMPUTERSCORE){
                resultText.innerHTML = 'Computer Won :0';
            } else{
                resultText.innerHTML = 'Draw';
            }

            rpsScreen.appendChild(resultText);
        }
    }
}


function nextBtnClicked() {
    let childToRemoveHuman = humanChoice.childNodes[humanChoice.childNodes.length - 1];
    let childToRemoveComputer = computerChoice.childNodes[computerChoice.childNodes.length - 1];

    if(humanChoice.childNodes.length === 2) {
        humanChoice.removeChild(childToRemoveHuman);
    }

    if(computerChoice.childNodes.length === 2) {
        computerChoice.removeChild(childToRemoveComputer);
    }
}


function reloadBtnClicked() {
    location.reload();
}


function unlimitedFunc(){
    playerOption.style.display = 'none';
}

function fiveRoundFunc(){
    playerOption.style.display = 'none';
    roundNumber = 5;
}

function tenRoundFunc(){
    playerOption.style.display = 'none';
    roundNumber = 10;
}