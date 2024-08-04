btns = document.querySelectorAll(".cell");
resetBtn = document.querySelector("#reset-game-btn");
newBtn = document.querySelector("#new-game-btn");

let turnO = true;
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const displayWinner = (winner) => {
    document.getElementById("winnerDisplay").innerText = winner
}

const disableBoard = () => {
    for(let btn of btns){
        btn.disabled = true;
    }
}

const resetBoard = () => {
    turnO = true;
    for(let btn of btns){
        btn.innerText = "";
        btn.disabled = false;
        btn.setAttribute('data-text', '');
    }
    document.getElementById("winnerDisplay").innerText = ''
}

const checkWinner = () => {
    for(let winPattern of winPatterns){
        const [a,b,c] = winPattern;
        if(btns[a].innerHTML 
            && btns[a].innerText === btns[b].innerText 
            && btns[a].innerHTML === btns[c].innerHTML){
            disableBoard();
            displayWinner(`${btns[a].innerText} jeet gaya.`);
            return;
        }
    }

    for(let btn of btns){
        if(btn.innerText === ''){
            return
        }
    }
    displayWinner('Draw')
}

for(let btn of btns){
    btn.addEventListener("click", () => {
        const playerSymbol = turnO ? 'O' : 'X';
        btn.setAttribute('data-text', playerSymbol);
        btn.innerText = playerSymbol; 
        turnO = !turnO;
        btn.disabled = true;
        checkWinner();
    }); 
}

resetBtn.addEventListener("click", resetBoard)
newBtn.addEventListener("click", resetBoard)