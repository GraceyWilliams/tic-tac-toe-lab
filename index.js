// "use strict";
document.addEventListener('DOMContentLoaded', () =>{
    let gameReset = document.querySelector('#restartButton').addEventListener('click', handleGameRestart);
    let cellBlock = document.querySelector('#boxformat').addEventListener('click', cellChecked);
})

const player_X = 'X';
const player_O = 'O';
const gameState = [];
let currentPlayer = player_O;
//debugger;

let counter = 0;

function cellChecked (event) {
    counter += 1;
    console.log(counter);
    //console.log('I was checked')
    const gameRecord = document.getElementById('gameOn');
    const id = event.target.id;
    //console.log(id)
    if(!gameState[id]) {
        gameState[id] = currentPlayer;
        event.target.innerText = currentPlayer;
        console.log(currentPlayer)
        if(playerHasWon()) {
            gameRecord.innerText = `${currentPlayer} has won.`;
            let xCounter = document.getElementById('xCounter');
            let oCounter = document.getElementById('oCounter');
            if(currentPlayer === player_X) {
                let currentCounterX = parseInt(xCounter.innerText);
                currentCounterX++;
                xCounter.innerText = currentCounterX;
            } else {
                let currentCounterO = parseInt(oCounter.innerText);
                currentCounterO++;
                oCounter.innerText = currentCounterO;
            }
            //debugger;
            //handleGameRestart();
            //console.log(text)
            return;
        } else if (counter === 9) {
            // console.log('draw')
            gameRecord.innerText = 'Game is a draw.'
        }
        currentPlayer = currentPlayer === player_X ? player_O : player_X;
    }
}

function playerHasWon () {
    console.log('hi')
    if(gameState[0] === currentPlayer) {
        console.log(gameState[0])
        if(gameState[1] === currentPlayer && gameState[2] === currentPlayer) {
            console.log(`${currentPlayer} wins top.`);
            return true;
        }
        if(gameState[3] === currentPlayer && gameState[6] === currentPlayer) {
            console.log(`${currentPlayer} wins left.`);
            return true;
        }
        if(gameState[4] === currentPlayer && gameState[8] === currentPlayer) {
            console.log(`${currentPlayer} wins diagonally.`);
            return true;
        }
    }
    if (gameState[8] === currentPlayer) {
        if(gameState[2] === currentPlayer && gameState[5] === currentPlayer) {
            console.log(`${currentPlayer} wins right.`);
            return true;
        }
        if(gameState[6] === currentPlayer && gameState[7] === currentPlayer) {
            console.log(`${currentPlayer} wins bottom.`);
            return true;
        }
    } 
    if (gameState[4] === currentPlayer) {
        if(gameState[1] === currentPlayer && gameState[7] === currentPlayer) {
            console.log(`${currentPlayer} wins vertically.`);
            return true;
        }
        if(gameState[3] === currentPlayer && gameState[5] === currentPlayer) {
            console.log(`${currentPlayer} wins horizantally.`);
            return true;
        }
    }
}

function handleGameRestart() {
    gameState.forEach((states, index) => {
        gameState[index] = null;
    });
        //document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
    // console.log(boxformat)
    const cells = document.querySelectorAll('.cell');
    [...cells].forEach((cell) => {
    cell.innerText = '';
    });  //what to get rid of the text from the cell 
    const gameRecord = document.getElementById('gameOn');
    gameRecord.innerText = "Let's Play";
    //console.log(gameRecord)
    currentPlayer = player_O;
 };
