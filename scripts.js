
// LOADS OUR GAME

function GameSpaceBuilder() {
// starts at 1 to make more sense in console. Space 0 makes less sense at a glance than space 1.
    for(let i=1; i <= 9; i++){
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", i);
        newDiv.setAttribute("onClick", "GameSpaceClicked(this.id)");
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
    let spaceNum = id;
    const test = console.log(spaceNum);
}

