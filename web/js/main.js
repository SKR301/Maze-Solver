function clickedCell(cell){
    if(isWall && !isSolvePressed){
        setWall(cell);
    }
    if(isStart && !isSolvePressed){
        setStart(cell);
    }
    if(isEnd && !isSolvePressed){
        setEnd(cell);
    }
}
function hoveredCell(cell){
    if(isWall && !isSolvePressed && mouseDown){
        setWall(cell);
    }
}

function setWall(cell){
    var row = Number(cell.id.split('_')[1]);
    var col = Number(cell.id.split('_')[2]);

    if(maze[row][col] == -1){
        maze[row][col] = 0;
        cell.style.backgroundColor = 'grey';
    } else {
        maze[row][col] = -1;
        cell.style.backgroundColor = 'black';
    }
}

function setStart(cell){
    var row = Number(cell.id.split('_')[1]);
    var col = Number(cell.id.split('_')[2]);

    if(row == startPos.x && col == startPos.y){
        maze[row][col] = 0;
        startPos = {x: -1, y: -1};
        cell.style.backgroundColor = 'grey';
    } else {
        if(startPos.x == -1 && startPos.y == -1){
            if(maze[row][col] != 0){
                console.log(maze[row][col], startPos)
                alert('This is already occupied can\'t be a starting point')
            } else {
                maze[row][col] = 1;
                startPos = {x: row, y: col};
                cell.style.backgroundColor = 'yellow';
                console.log(startPos);
            }
        }
    }
}

function setEnd(cell){
    var row = Number(cell.id.split('_')[1]);
    var col = Number(cell.id.split('_')[2]);

    if(row == endPos.x && col == endPos.y){
        maze[row][col] = 0;
        endPos = {x: -1, y: -1};
        cell.style.backgroundColor = 'grey';
    } else {
        if(endPos.x == -1 && endPos.y == -1){
            if(maze[row][col] != 0){
                alert('This is already occupied can\'t be a starting point')
            } else {
                maze[row][col] = NaN;
                endPos = {x: row, y: col};
                cell.style.backgroundColor = 'red';
            }
        }
        console.log(endPos);
    }
}