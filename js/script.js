//GLOBAL ####################################################
//Random number #############################################
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var _grid = document.querySelector("#grid");
var pacmanCoins = 0;
var endGame = true;
var myMapDef = new Map();
var gridTable = myMapDef.getMapDef();
document.querySelector("#btn-1").addEventListener("click", restartGame);
document.querySelector("#btn-start").addEventListener("click", startGame);

//Pacman #################
var Pacman = new PacMan();
//Blue Phantom #################
var BluePhantom = new Phantom(12, 5, "blue_phantom");
//Red Phantom ##################
var RedPhantom = new Phantom(11, 7, "red_phantom");
//Yellow Phantom #################
var YellowPhantom = new Phantom(13, 9, "yellow_phantom");
//Green Phantom #################
var GreenPhantom = new Phantom(2, 17, "green_phantom");

//Make interactive total coins ###################################
var totalCoins = 0;
for (let rows = 0; rows < gridTable.length; rows++) {
    for (let cols = 0; cols < gridTable[rows].length; cols++) {
        if (gridTable[rows][cols] === 2) {
            totalCoins++;
        }
    }
}

//Pacman moving keys
document.onkeydown = function(e) {
    // console.log(e.keyCode);
    switch (e.keyCode) {
        case 38: //UP
            Pacman.direction = 3;
            break;
        case 40: //DOWN
            Pacman.direction = 1;
            break;
        case 37: //LEFT
            Pacman.direction = 2;
            break;
        case 39: //Right
            Pacman.direction = 0;
            break;
    }
};

//Prevent scrolling on arrow keys ##########################################
window.addEventListener(
    "keydown",
    function(e) {
        // space and arrow keys
        if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    },
    false
);

//Restart Game #####################################################
function restartGame() {
    location.reload();
}

//A loop that refresh every 1s ######################################
function loopRefresh() {
    let myElement = document.querySelector(".score");
    myMapDef.showGridTable();
    Pacman.movePacman();
    BluePhantom.movePhantom();
    RedPhantom.movePhantom();
    YellowPhantom.movePhantom();
    GreenPhantom.movePhantom();
    Pacman.eatCoins();

    if (endGame == false) {
        level();
    } else {
        endGame = true;
    }

    if (endGame == true && pacmanCoins === totalCoins) {
        myElement.innerHTML = `<h1><span class="text-success">YOU WON! Total coins: <span>${totalCoins}</span></h1`;
    } else if (endGame == true && pacmanCoins > 1) {
        myElement.innerHTML = `<h1><span>GAME OVER!!!</span></h1>`;
    }
}
loopRefresh();

//Start Game ################################################
function startGame() {
    endGame = false;
    loopRefresh();

    //Disables START button if game is running
    if (endGame === false) {
        document.querySelector("#btn-start").disabled = true;
    } else {
        document.querySelector("#btn-start").disabled = false;
    }
}

//Select LEVEL ##########################################
function level() {
    let level = document.querySelector("#level").value;

    //Disable options when game is running
    if (endGame == false) {
        document.querySelector("#level").disabled = true;
    }

    //Select the difficulty level
    if (level == 1) {
        setTimeout(loopRefresh, 1000);
    } else if (level == 2) {
        setTimeout(loopRefresh, 800);
    } else if (level == 3) {
        setTimeout(loopRefresh, 600);
    } else if (level == 4) {
        setTimeout(loopRefresh, 400);
    } else if (level == 5) {
        setTimeout(loopRefresh, 200);
    } else if (level == 6) {
        setTimeout(loopRefresh, 100);
    } else if (level == 7) {
        setTimeout(loopRefresh, 50);
    } else if (level == 8) {
        setTimeout(loopRefresh, 1);
    }
}
