var helperQueue = [];
var dist;

async function solve(){
	helperQueue = [];
    if(startPos.x == -1 || startPos.y == -1){
        alert('Select a starting point before proceeding further');
        return;
    }
    if(endPos.x == -1 || endPos.y == -1){
        alert('Select an ending point before proceeding further');
        return;
    }

	isSolvePressed = true;

    document.getElementById('wallBtn').disabled = true;
    document.getElementById('startBtn').disabled = true;
    document.getElementById('endBtn').disabled = true;
    document.getElementById('wallBtn').style.transform = 'scale(1)';
    document.getElementById('startBtn').style.transform = 'scale(1)';
    document.getElementById('endBtn').style.transform = 'scale(1)';

    helperQueue.push(startPos);

    var done = false;
    while (!done) {
		done = await popProcessPush()
	}

	fillCell(startPos.x, startPos.y)

	setTimeout(function(){showPath()},5000);
}

function fillCell(a,b){
	setTimeout(function(){
		if(maze[a][b] != 0 && maze[a][b] != -1 && !document.getElementById('cell_'+(a)+'_'+(b)).className.includes('bg-secondary')){
			document.getElementById('cell_'+(a)+'_'+(b)).innerHTML = maze[a][b];
			document.getElementById('cell_'+(a)+'_'+(b)).classList.remove('bg-info');
			document.getElementById('cell_'+(a)+'_'+(b)).classList.add('bg-secondary');

			if(a>0){
				fillCell(a-1,b);
			} 
			if(a<ROWS-1){
				fillCell(a+1,b);
			}
			if(b>0){
				fillCell(a,b-1);
			} 
			if(b<COLS-1){
				fillCell(a,b+1);
			}
		} else {
			return;
		}
	}, 50);
}

async function popProcessPush(){
	if(helperQueue.length > 0){
		currRow = helperQueue[0].x;
		currCol = helperQueue[0].y;

		if(currRow+1 == endPos.x && currCol == endPos.y){
			maze[endPos.x][endPos.y] = maze[currRow][currCol]+1;
			// document.getElementById('cell_'+(endPos.x)+'_'+(endPos.y)).innerHTML = maze[currRow][currCol]+1;
			return true;
		}
		if(currRow-1 == endPos.x && currCol == endPos.y){
			maze[endPos.x][endPos.y] = maze[currRow][currCol]+1;
			// document.getElementById('cell_'+(endPos.x)+'_'+(endPos.y)).innerHTML = maze[currRow][currCol]+1;
			return true;
		}
		if(currRow == endPos.x && currCol+1 == endPos.y){
			maze[endPos.x][endPos.y] = maze[currRow][currCol]+1;
			// document.getElementById('cell_'+(endPos.x)+'_'+(endPos.y)).innerHTML = maze[currRow][currCol]+1;
			return true;
		}
		if(currRow == endPos.x && currCol-1 == endPos.y){
			maze[endPos.x][endPos.y] = maze[currRow][currCol]+1;
			// document.getElementById('cell_'+(endPos.x)+'_'+(endPos.y)).innerHTML = maze[currRow][currCol]+1;
			return true;
		}

		if(isSolvePressed){
			if(!isBlocked(currRow,currCol)){
				setNeighbour(currRow, currCol);
			}else{

			}
		}else {
			return;
		}

		helperQueue.shift();
	} else {
	}
}

function showPath(){
	var a = endPos.x;
	var b = endPos.y;
	do{
		if(!(a == startPos.x && b == startPos.y) || !(a == endPos.x && b == endPos.y)){
			console.log(a,b)
			document.getElementById('cell_'+(a)+'_'+(b)).classList.remove('bg-secondary');
			document.getElementById('cell_'+(a)+'_'+(b)).classList.add('bg-warning');
		}

		if((a > 0) && (!isBlocked(a-1,b)) && (maze[a][b]-1 == maze[a-1][b])) {
			a = a-1;
			b = b;
			continue;
		}
		if((a < ROWS-1) && (!isBlocked(a+1,b)) && (maze[a][b]-1 == maze[a+1][b])) {
			a = a+1;
			b = b;
			continue;
		}
		if((b > 0) && (!isBlocked(a,b-1)) && (maze[a][b]-1 == maze[a][b-1])) {
			a = a;
			b = b-1;
			continue;
		}
		if((b < COLS-1) && (!isBlocked(a,b+1)) && (maze[a][b]-1 == maze[a][b+1])) {
			a = a;
			b = b+1;
			continue;
		}

	}while(!(a == startPos.x && b == startPos.y));
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
            // document.getElementById('cell_'+(a-1)+'_'+(b)).innerHTML = maze[a-1][b];
			// document.getElementById('cell_'+(a-1)+'_'+(b)).classList.remove('bg-info');
			// document.getElementById('cell_'+(a-1)+'_'+(b)).classList.add('bg-secondary');
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
            // document.getElementById('cell_'+(a)+'_'+(b-1)).innerHTML = maze[a][b-1];
			// document.getElementById('cell_'+(a)+'_'+(b-1)).classList.remove('bg-info');
			// document.getElementById('cell_'+(a)+'_'+(b-1)).classList.add('bg-secondary');
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
            // document.getElementById('cell_'+(a+1)+'_'+(b)).innerHTML = maze[a+1][b];
			// document.getElementById('cell_'+(a+1)+'_'+(b)).classList.remove('bg-info');
			// document.getElementById('cell_'+(a+1)+'_'+(b)).classList.add('bg-secondary');
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
            // document.getElementById('cell_'+(a)+'_'+(b+1)).innerHTML = maze[a][b+1];
			// document.getElementById('cell_'+(a)+'_'+(b+1)).classList.remove('bg-info');
			// document.getElementById('cell_'+(a)+'_'+(b+1)).classList.add('bg-secondary');
		}
	}
}
