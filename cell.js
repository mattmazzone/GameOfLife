//1- Any live cell with fewer than two live neighbours dies, as if by underpopulation.
//2- Any live cell with two or three live neighbours lives on to the next generation.
//3- Any live cell with more than three live neighbours dies, as if by overpopulation.
//4- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
function Cell(i, j, w) {
    this.i = i;
    this.j = j;
    this.x = i * w;
    this.y = j * w;
    this.w = w;

    this.neighbourCount = 0;

    this.alive = false;

}

Cell.prototype.show = function() {


    if (this.alive) {
        fill(255);
        noStroke();
        rect(this.x, this.y, this.w, this.w);
    }

};


Cell.prototype.countNeighbours = function() {

    let total = 0;

    for (let xoff = -1; xoff <= 1; xoff++) {
        let i = this.i + xoff;
        if (i < 0 || i >= cols) continue;

        for (let yoff = -1; yoff <= 1; yoff++) {
            let j = this.j + yoff;
            if (j < 0 || j >= rows) continue;

            if (xoff === 0 && yoff === 0) continue;


            let neighbour = grid[i][j];
            if (neighbour.alive) {
                total++;
            }
        }
    }
    this.neighbourCount = total;
};


Cell.prototype.golRules = function() {

    //Conditions 1,2,3 require a living cell
    if (this.alive) {

        if (this.neighbourCount < 2 || this.neighbourCount > 3) {
            this.alive = false;
        }

    }
    //Condition 4 is for dead cells
    else if (this.neighbourCount === 3) {
        this.alive = true;
    }
}


Cell.prototype.isAlive = function() {
    if (this.alive = true)
        return true;
    else
        return false;
}