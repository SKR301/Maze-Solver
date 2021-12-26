const ROWS = 5;
const COLS = 5;

var startPos = {x: -1, y: -1};
var endPos = {x: -1, y: -1};

const maze = Array.from({ length: ROWS }, () => 
    Array.from({ length: COLS }, () => 0)
);

function clickedCell(cell){
    if(isWall){
        setWall(cell);
    }
    if(isStart){
        setStart(cell);
    }
    if(isEnd){
        setEnd(cell);
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

    if(row == startPos.x && col == startPos.y){
        maze[row][col] = 0;
        startPos = {x:-1, y:-1};
        cell.style.backgroundColor = 'grey';
    } else {
        if(startPos.x == -1 && startPos.y == -1){
            if(maze[row][col] != 0){
                alert('This is already occupied can\'t be a starting point')
            } else {
                maze[row][col] = 1;
                startPos = {x:row, y:col};
                cell.style.backgroundColor = 'yellow';
            }
        }
    }
}

function setEnd(cell){
    var row = cell.id[5];
    var col = cell.id[7];

    if(row == endPos.x && col == endPos.y){
        maze[row][col] = 0;
        endPos = {x:-1, y:-1};
        cell.style.backgroundColor = 'grey';
    } else {
        if(endPos.x == -1 && endPos.y == -1){
            if(maze[row][col] != 0){
                alert('This is already occupied can\'t be a starting point')
            } else {
                maze[row][col] = 1;
                endPos = {x:row, y:col};
                cell.style.backgroundColor = 'red';
            }
        }
    }
}




