# Game Of Life

The Game of Life is a cellular automaton created by John Horton Conway. 

## Game rules

  1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
  2. Any live cell with two or three live neighbours lives on to the next generation.
  3. Any live cell with more than three live neighbours dies, as if by overpopulation.
  4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.


For more information: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life


## Implementation 
My implementation uses JavaScript and the p5.js library for graphics.

Features to be added:
- User decides initial amount of living cells
- Edit Mode (Different brushes, library of organisms)
- Advanced performance stats
- Performance improvements


## To Run
- Clone the repository
- Start a local server in the folder (https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server)
- Go to http://localhost:{your-port-num}
