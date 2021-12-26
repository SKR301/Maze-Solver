const rows = 5;
const cols = 5;
const maze = Array.from({ length: rows }, () => 
    Array.from({ length: cols }, () => 0)
);

function setWall(cell){
    var row = cell.id[5];
    var col = cell.id[7];

    if(maze[row][col] == -1){
        maze[row][col] = 0;
        cell.style.backgroundColor = 'grey';
    } else {
        maze[row][col] = -1;
        cell.style.backgroundColor = 'black';
    }

    console.log(maze);
}
