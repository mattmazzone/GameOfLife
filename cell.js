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

  stroke(0);
  noFill();
  rect(this.x, this.y, this.w, this.w);


    if (this.alive) {
      fill(127);
      ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.5);


        textAlign(CENTER);
        fill(0);
        text(this.neighbourCount, this.x + this.w * 0.5, this.y + this.w - 6);


    } else {
      fill(200);
      rect(this.x, this.y, this.w, this.w);

      textAlign(CENTER);
        fill(0);
        text(this.neighbourCount, this.x + this.w * 0.5, this.y + this.w - 6);
    }

};

Cell.prototype.countNeighbours = function() {
  if (this.alive){
    var total = -1;
  }
  else{
    var total = 0;
  }
  for (var xoff = -1; xoff <= 1; xoff++) {
    var i = this.i + xoff;
    if (i < 0 || i >= cols) continue;

    for (var yoff = -1; yoff <= 1; yoff++) {
      var j = this.j + yoff;
      if (j < 0 || j >= rows) continue;

      var neighbour = grid[i][j];
      if (neighbour.alive) {
        total++;
      }
    }
  }
  this.neighbourCount = total;
};


Cell.prototype.golRules = function() {

//Conditions 1,2,3 require a living cell
if (this.alive){
  //Condition 1
  if (this.neighbourCount <2){
    this.alive = false;
  }
  //Condition 2 (Should not change anything if cell is alive)
  else if (this.neighbourCount === 2 || this.neighbourCount === 3) {
    this.alive = true;
  }
  //Condition 3
  else if (this.neighbourCount > 3) {
    this.alive = false;
  }
}
  //Condition 4
  else if (!this.alive && this.neighbourCount === 3) {
    this.alive = true;
  }
}
