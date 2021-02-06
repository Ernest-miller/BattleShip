// need to be able set our ship on gameBoard
// need for the AI to set it's ship on gameBoard
// need to be able to click on tiles and mark as used
// check if tile if the AI
// if ////
// else ////
// if AI gets playertile AI wins
// else it is player's turn
// add a gameover condition
//////////////////////////////
// set the root --perRow in JS
let root = document.documentElement;
let perRow = 3;
root.style.setProperty('--perRow', perRow)
let gameBoard = document.getElementById('gameboard');
let playerPosition;
let computerPosition;
let gameover = false;
running = true;
//////////
for (let i = 0; i < perRow * perRow; i++) {
    let tile = document.createElement('div');
    tile.classList.add('tile', `tile${i}`);
    tile.addEventListener('click', setPlayer);
    gameBoard.appendChild(tile);
};
//////////
function setPlayer(event) {
    playerPosition = event.target;
    if(confirm('Is that your final choice?')) {
        let tiles = document.querySelectorAll('.tile');
        computerPosition = tiles[getRandomInt(tiles.length)];
        tiles.forEach((tile) => {
            console.log(tile);
            tile.removeEventListener('click', setPlayer);
            tile.addEventListener('click', play);
        });
    };
};
//////////
function play(event) {
    if (!gameover && !running) {
        let tile = event.target;
        tile.classList.add('shot');
        if (tile == computerPosition) {
            console.log('You win!');
            addMessage('You win!', comp == true);
            gameover = !gameover;
        } else {
            addMessage('You Missed', comp == true);
            let tiles = document.querySelectorAll('.tile');
            shot = tiles[getRandomInt(tiles.length)];
                if (shot == playerPosition) {
                    console.log('Computer Wins!');
                    addMessage('Computer Wins!', comp == true);
                    gameover = !gameover;
                } else {
                    console.log('Computer Missed');
                    addMessage('Computer Missed!', comp == true);
                }
            }
        if (gameover) {
            computerPosition.add('battleship');
        }
    }
}


// //////////
let message = document.getElementById('message');
function addMessage(message, comp = false ) {//
    messageContainer.innerText = message;
    let messageContainer = document.createElement('p');
    if (comp) {
        setTimeout(() => {
            messageBoard.prepend(messageContainer);
            running = false;
        }, 500);
    } else {
        messageBoard.prepend(messageContainer);
    }
}
// // 
// let message = document.getElementById('message');
// addMessage
// function addMessage(message, comp = false ) {//
//     messageContainer.innerText = message;
//     let messageContainer = document.createElement('p');
//     if (comp) {
//         setTimeout(() => {
//         messageBoard.prepend(messageContainer);
//         running = false;
//     }, 500);
//     } else {
//         messageBoard.prepend(messageContainer);
//     }
// }
// 
//////////
function getRandomInt(max) { return Math.floor(Math.random() * Math.floor(max));}
