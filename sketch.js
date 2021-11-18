function make2DArray(cols, rows) {
    var arr = new Array(cols);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

var grid;
var cols;
var rows;
var w = 10;

var totalAlive = 5100;

var currentAlive = 0;



let button;

function setup() {
    createCanvas(1700, 800);
    frameRate(60);




    cols = floor(1301 / w);
    rows = floor(801 / w);

    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = new Cell(i, j, w);
        }
    }

    // Pick totalAlive spots
    var options = [];
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            options.push([i, j]);
        }
    }

    for (let n = 0; n < totalAlive; n++) {
        var index = floor(random(options.length));
        var choice = options[index];
        var i = choice[0];
        var j = choice[1];
        // Deletes that spot so it's no longer an option
        options.splice(index, 1);
        grid[i][j].alive = true;
    }

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j].countNeighbours();
        }
    }

    setInterval(function() {
        //Game Of Life Logic
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                grid[i][j].golRules();
            }
        }

        //Re-count neighbours
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                grid[i][j].countNeighbours();
            }
        }

    }, 300);

    button = createButton('Reset Board');
    button.position(1380, 180);
    button.mousePressed(setup);

}




function draw() {

    background(255);

    fill(128, 128, 128);
    noStroke();
    rect(1300, 0, 30, 800);

    //Display changes

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {

            if (grid[i][j].alive === true) {
                currentAlive++;
            }

            grid[i][j].show();
        }
    }


    textSize(30);
    text("Conway's Game Of Life", 1370, 50);
    textSize(20);


    text(totalAlive, 1570, 130);
    text("Initial Alive Cells: ", 1370, 130);


    text(currentAlive, 1570, 150);
    text("Current Alive Cells: ", 1370, 150);




    currentAlive = 0;

}