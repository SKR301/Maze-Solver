var helperQueue = [];

function solve(){
	helperQueue = [];
    if(startPos.x == -1 || startPos.y == -1){
        alert('Select a starting point before proceeding');
        return;
    }
    if(endPos.x == -1 || endPos.y == -1){
        alert('Select an ending point before proceeding');
        return;
    }

	isSolvePressed = true;

    document.getElementById('wallBtn').disabled = true;
    document.getElementById('startBtn').disabled = true;
    document.getElementById('endBtn').disabled = true;

    helperQueue.push(startPos);

    while(helperQueue.length > 0){
		currRow = helperQueue[0].x;
		currCol = helperQueue[0].y; 

		if(currRow+1 == endPos.x && currCol == endPos.y){
			document.getElementById('cell_'+(endPos.x)+'_'+(endPos.y)).innerHTML = maze[currRow][currCol]+1;
			break;
		}
		if(currRow-1 == endPos.x && currCol == endPos.y){
			document.getElementById('cell_'+(endPos.x)+'_'+(endPos.y)).innerHTML = maze[currRow][currCol]+1;
			break;
		}
		if(currRow == endPos.x && currCol+1 == endPos.y){
			document.getElementById('cell_'+(endPos.x)+'_'+(endPos.y)).innerHTML = maze[currRow][currCol]+1;
			break;
		}
		if(currRow == endPos.x && currCol-1 == endPos.y){
			document.getElementById('cell_'+(endPos.x)+'_'+(endPos.y)).innerHTML = maze[currRow][currCol]+1;
			break;
		}

		if(!isBlocked(currRow,currCol)){
			setNeighbour(currRow, currCol);
		}else{

		}
		setTimeout(10000);
		helperQueue.shift();
	}    
	console.log(maze);
}

function isVisited(a,b){
	return  (maze[a][b] != 0)? true: false;
}

function isBlocked(a,b){
	return  (maze[a][b] == -1)? true: false;
}

function setNeighbour(a, b){
	var possibleVal = maze[a][b] + 1;

	if(a>0){
		if(!isBlocked(a-1,b)){
			if(isVisited(a-1,b)){
				maze[a-1][b] = Math.min(possibleVal, maze[a-1][b]);
			}else{
				maze[a-1][b] = possibleVal;
				helperQueue.push({x: a-1, y: b});
			}
            document.getElementById('cell_'+(a-1)+'_'+(b)).innerHTML = maze[a-1][b];
		}
	}
	if(b>0){
		if(!isBlocked(a,b-1)){
			if(isVisited(a,b-1)){
				maze[a][b-1] = Math.min(possibleVal, maze[a][b-1]);
			}else{
				maze[a][b-1] = possibleVal;
				helperQueue.push({x: a, y: b-1});
			}
            document.getElementById('cell_'+(a)+'_'+(b-1)).innerHTML = maze[a][b-1];
		}
	}
	if(a<ROWS-1){
		if(!isBlocked(a+1,b)){
			if(isVisited(a+1,b)){
				maze[a+1][b] = Math.min(possibleVal, maze[a+1][b]);
			}else{
				maze[a+1][b] = possibleVal;
				helperQueue.push({x: a+1,y: b});
			}
            document.getElementById('cell_'+(a+1)+'_'+(b)).innerHTML = maze[a+1][b];
		}
	}
	if(b<COLS-1){
		if(!isBlocked(a,b+1)){
			if(isVisited(a,b+1)){
				maze[a][b+1] = Math.min(possibleVal, maze[a][b+1]);
			}else{
				maze[a][b+1] = possibleVal;
				helperQueue.push({x: a, y: b+1});
			}
            document.getElementById('cell_'+(a)+'_'+(b+1)).innerHTML = maze[a][b+1];
		}
	}
}