let desk = document.getElementById('desk');
    
drawDesk();





function drawDesk() {
    let div;
    for (let j = 0; j < 8; j++) {
        for (let i = 0; i < 8; i++) {
            div = document.createElement('div');
            div.setAttribute('data-x', i);
            div.setAttribute('data-y', j);
            div.classList.add('square');
            if ((i + j) % 2) {
                div.classList.add('black');
            };
            div.addEventListener('click', showHorseMoves);
            desk.appendChild(div);
        }
    }

}

function showHorseMoves() {
    clearDesk();
    this.classList.add('active');
   let  currentX = +this.dataset.x,
    currentY = +this.dataset.y;

    drawMoves(currentX, currentY);


}

function clearDesk(){
    let squares = document.getElementsByClassName('square');
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.remove('active');
        squares[i].classList.remove('horseMove');

    }
}

function drawMoves(a, b) {
    let newX, newY;
    for (let i = -2; i < 3; i = i + 4) {
        for (let j = -1; j < 2; j = j + 2) {
            newX = a + i;
            newY = b + j;
            if (isPossible(newX, newY)) {
                showTheMove(newX, newY);
            }
            newX = a + j;
            newY = b + i;
            if (isPossible(newX, newY)) {
                showTheMove(newX, newY);
            }
        }
    }
}

function isPossible(a, b) {
    if (a >= 0 && a <= 7&& b >= 0 && b <= 7) {
        return true;
    } else {
        return false;
    };
}

function showTheMove(a,b){
    document.getElementsByClassName('square')[b*8+a].classList.add('horseMove');
}