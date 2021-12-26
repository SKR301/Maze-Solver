const rows = 5;
const cols = 5;

var startSet = false;

const maze = Array.from({ length: rows }, () => 
    Array.from({ length: cols }, () => 0)
);

function clickedCell(cell){
    if(isWall){
        setWall(cell);
    }
    if(isStart){
        setStart(cell);
    }
    if(isEnd){
        alert('end');
    }
}

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
}

function setStart(cell){
    var row = cell.id[5];
    var col = cell.id[7];

    if(maze[row][col] == -1){
        alert('This is a wall, can\'t be a starting point')
    } else {
        maze[row][col] = 1;
        cell.style.backgroundColor = 'yellow';
    }
}




