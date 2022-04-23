
// LOADS OUR GAME

function GameSpaceBuilder() {
// starts at 1 to make more sense in console. Space 0 makes less sense at a glance than space 1.
    for(let i=1; i <= 9; i++){
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

const player = (name, score) => {
    let playerScore = () => { score++; console.log(score); }
    return { name, playerScore }
}

const player1 = player('player1', 0);
const player2 = player('player2', 0);
// CONTROLS

const GameSpaceClicked = (id) => {
    const currentDiv = document.getElementById(id);
    if(currentDiv.getElementsByClassName == "player-selected"){
        console.log("Already Selected!");
    }
    else {
        currentDiv.classList.add("player-selected");
    }
}

const GameSpaceMouseOver = (id) => {
    const currentDiv = document.getElementById(id);
    if(currentDiv.classList.contains == "player-selected"){
        console.log("Already Selected!");
    }
    else {
        currentDiv.innerHTML = "X";
    }
    

}
const GameSpaceMouseOut = (id) => {
    const currentDiv = document.getElementById(id);
    if(currentDiv.classList.contains == "player-selected"){
        console.log("Already Selected!");
    }
    else {
        currentDiv.innerHTML = "";
    }

}
