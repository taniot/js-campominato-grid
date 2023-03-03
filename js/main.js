'use strict';

/*****
 * Functions
 * 
 */


function resetGame() {
    console.log('resetGame');
    const boardContainer = document.querySelector('.board');
    boardContainer.innerHTML = '';
}

function createBoard(cellNumber) {

    let fragmentBoard = document.createDocumentFragment();

    for (let i = 1; i <= cellNumber; i++) {
        const element = document.createElement('div');
        element.classList.add('cell');
        element.classList.add(`cell-${Math.sqrt(cellNumber)}`);


        element.addEventListener('click', function(){

        });

        element.innerText = i;
        fragmentBoard.append(element);

    }
    return fragmentBoard;
}

function campoMinato() {
    console.log('inizia il gioco');


    //1. creare la grigia di gioco
    //. prendo il contenitore delle grigia - board
    //. definisco un numero di celle iniziali
    //. per ogni numero di cella, creo la cella 
    //.. la cella deve avere una classe, un contenuto, un evento
    //. appendo la cella al contenitore di gioco

    const boardContainer = document.querySelector('.board');
    resetGame();

    let cellNumber; //TODO: sarà definito da una selezione dell'utente
    let level = 1; //1,2,3 //TODO: select da cui reperire il livello 100, 81, 49

    //1: facile / 100 10*10 10^2
    //2: medio / 81 9*9 9^2
    //3 difficile / 49 7*7 7^2

    //IF / SWITCH

    switch (level) {

        case 2:
            cellNumber = 81;
            break;

        case 3:
            cellNumber = 49;
            break;

        case 1:
        default:
            cellNumber = 100;
    }


    console.log(cellNumber);
    console.log(Math.sqrt(cellNumber));

    //crea campo di gioco
    const fragmentBoard = createBoard(cellNumber);
    //append fragmemnt a boardContainer
    boardContainer.append(fragmentBoard);
}


/******
 * Main
 *****/

//button start

const startButton = document.getElementById('game-start');
const resetButton = document.getElementById('game-reset');
startButton.addEventListener('click', campoMinato);
resetButton.addEventListener('click', resetGame);














