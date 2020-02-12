class Phantom {
    rows;
    cols;
    direction;
    class;
    constructor(rows, cols, color) {
        this.rows = rows;
        this.cols = cols;
        this.direction = "";
        this.class = color;
    }

    movePhantom() {
        this.direction = getRandom(0, 3);
        if (this.direction == 0) {
            this.cols++; //Right
        } else if (this.direction == 1) {
            this.rows++; //Down
        } else if (this.direction == 2) {
            this.cols--; //Left
        } else if (this.direction == 3) {
            this.rows--; //Up
        }

        this.testCollisionPhantom();

        let div = document.createElement("div");
        div.classList.add(this.class);
        div.style.gridRow = this.rows;
        div.style.gridColumn = this.cols;
        _grid.append(div);

        Pacman.stopGame();
    }

    //Defines the limits for the PHANTOMS on the Map #####################################
    testCollisionPhantom() {
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
}
