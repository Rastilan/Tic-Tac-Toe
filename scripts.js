
// LOADS OUR GAME

function GameSpaceBuilder() {
// starts at 1 to make more sense in console. Space 0 makes less sense at a glance than space 1.
    for(let i=0; i < 9; i++){
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", i);
        newDiv.setAttribute("onClick", "GameSpaceClicked(this.id)");
        newDiv.setAttribute("onmouseover", "GameSpaceMouseOver(this.id)");
        newDiv.setAttribute("onmouseout", "GameSpaceMouseOut(this.id)");
        newDiv.setAttribute("class", "game-space");
        const currentDiv = document.getElementById("game-board");
        currentDiv.insertAdjacentElement('beforeend', newDiv);

    }
}
GameSpaceBuilder();



const player = (name, score, marker) => {
    let playerScore = () => { score++; console.log(score); marker;}
    return { name, playerScore, marker }
}

const player1 = player('player1', 0, "X");
const player2 = player('player2', 0, "O");
// CONTROLS



//SET CURRENT PLAYER
let currentPlayer = "";

function SetCurrentPlayer(){
    if(currentPlayer == player1){
        currentPlayer = player2;
    }
    else {
        currentPlayer = player1;
    }
}
SetCurrentPlayer();
const GameSpaceClicked = (id) => {
    const currentDiv = document.getElementById(id);
    if(currentDiv.getElementsByClassName == "player-selected"){
        console.log("Already Selected!");
    }
    else {
        currentDiv.classList.add("player-selected");
        WinCond();
        SetCurrentPlayer();
    }
}

const GameSpaceMouseOver = (id) => {
    const currentDiv = document.getElementById(id);
    if(currentDiv.classList.contains("player-selected")){
        
    }
    else {
        currentDiv.innerHTML = currentPlayer.marker;
        
    }
    

}
const GameSpaceMouseOut = (id) => {
    const currentDiv = document.getElementById(id);
    if(currentDiv.classList.contains("player-selected")){
        
    }
    else {
        currentDiv.innerHTML = "";
    }

}

function WinCond() {
    const winCond = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    for(let i = 0; i < 8; i++){
        if(document.getElementById(winCond[i][0]).innerText == currentPlayer.marker && document.getElementById(winCond[i][1]).innerText == currentPlayer.marker && document.getElementById(winCond[i][2]).innerText == currentPlayer.marker) {
         alert(currentPlayer.name + " Wins!");  
         ResetBoard();
        }
    }

}

function ResetBoard() {
    for(let i = 0; i < 8; i++){
        document.getElementById(i).innerHTML = "";
        document.getElementById(i).setAttribute("class", "game-space");
    }
}