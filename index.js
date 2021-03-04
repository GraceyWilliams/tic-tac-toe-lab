
document.addEventListener('DOMContentLoaded', () =>{
    //let gameReset = document.querySelector('#restart').addEventListener('click', handleGameReset)
    let cellBlock = document.querySelector('#boxformat').addEventListener('click', cellChecked)
})

const player_X = 'X';
const player_O = 'O';
const gameState = ['', '', '', '', '', '', '', '', ''];
//const text = document.querySelector('#gameOn');
let currentPlayer = player_O;

function cellChecked (event) {
    //console.log('I was checked')
    const id = event.target.id;
    //console.log(id)
    if(!gameState[id]) {
        gameState[id] = currentPlayer;
        event.target.innerText = currentPlayer;
        currentPlayer = currentPlayer === player_X ? player_O : player_X;
        
        if(playerHasWon) {
            //text.innerText = `${currentPlayer} has won.`;
            //console.log(text)
            //return;
        }
    }
}

function playerHasWon () {
    if(gameState[0] === currentPlayer) {
        //console.log(gameState[0])
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
/* function handleGameRestart() {
    FILL IN RESTART CODE
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
 };*/


// function boxGrid() {
//     // BOX FORMAT
// };

