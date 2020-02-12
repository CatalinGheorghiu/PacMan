class PacMan {
    rows;
    cols;
    direction;

    constructor() {
        this.rows = 4;
        this.cols = 2;
        this.direction = "";
    }

    movePacman() {
        if (this.direction == 0) {
            this.cols++; //Right
        } else if (this.direction == 1) {
            this.rows++; //Down
        } else if (this.direction == 2) {
            this.cols--; //Left
        } else if (this.direction == 3) {
            this.rows--; //Up
        }

        this.testCollisionPacman();

        let div = document.createElement("div");
        div.classList.add("pacman");
        div.style.gridRow = this.rows;
        div.style.gridColumn = this.cols;
        _grid.append(div);

        this.stopGame();
    }

    //Defines the limits for PACMAN on the Map  ########################################
    testCollisionPacman() {
        if (gridTable[this.rows - 1][this.cols - 1] == 0) {
            if (this.direction == 0) {
                this.cols--; //Right
            } else if (this.direction == 1) {
                this.rows--; //Down
            } else if (this.direction == 2) {
                this.cols++; //Left
            } else if (this.direction == 3) {
                this.rows++; //Up
            }
        }

        //Defines the middle limits
        if (this.cols > gridTable[0].length) {
            this.cols = 1;
        }
        if (this.cols < 1) {
            this.cols = gridTable[0].length;
        }
    }

    //Keeps the count of the eaten coins ######################################
    eatCoins() {
        let myElement = document.querySelector(".score");
        if (gridTable[this.rows - 1][this.cols - 1] == 2) {
            gridTable[this.rows - 1][this.cols - 1] = 1;

            //Adds the number of coins and displays it
            if ((gridTable[this.rows - 1][this.cols - 1] = 1)) {
                pacmanCoins++;
                myElement.innerHTML = `<br>Coins : <span>${pacmanCoins}</span>`;

                if (pacmanCoins == totalCoins) {
                    endGame = true;
                    myElement.innerHTML = `YOU WON! Total coins: ${totalCoins}`;
                }
            }
        }
    }

    //Stops Game on collision ####################################################
    stopGame() {
        let myElement = document.querySelector(".score");

        if (pacmanCoins === totalCoins) {
            myElement.innerHTML = `YOU WON! Total coins: ${totalCoins}`;
            endGame = true;
        }

        //Collision between phantoms
        if (this.cols === BluePhantom.cols && this.rows === BluePhantom.rows) {
            myElement.innerHTML = `<h1><span>GAME OVER!!!</span></h1>`;
            endGame = true;
        } else if (
            this.cols === RedPhantom.cols &&
            this.rows === RedPhantom.rows
        ) {
            myElement.innerHTML = `<h1><span>GAME OVER!!!</span></h1>`;
            endGame = true;
        } else if (
            this.cols === YellowPhantom.cols &&
            this.rows === YellowPhantom.rows
        ) {
            myElement.innerHTML = `<h1><span>GAME OVER!!!</span></h1>`;
            endGame = true;
        } else if (
            this.cols === GreenPhantom.cols &&
            this.rows === GreenPhantom.rows
        ) {
            myElement.innerHTML = `<h1><span>GAME OVER!!!</span></h1>`;
            endGame = true;
        }
    }
}
