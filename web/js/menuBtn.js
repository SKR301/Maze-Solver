var isWall;
var isStart;
var isEnd;

function enableWall(){
    isWall = !isWall;
    if(isWall){
        document.getElementById('wallBtn').disabled = false;
        document.getElementById('startBtn').disabled = true;
        document.getElementById('endBtn').disabled = true;
    } 
    if(!isWall){
        document.getElementById('wallBtn').disabled = false;
        document.getElementById('startBtn').disabled = false;
        document.getElementById('endBtn').disabled = false;
    }
}

function enableStart(){
    isStart = !isStart;
    if(isStart){
        document.getElementById('wallBtn').disabled = true;
        document.getElementById('startBtn').disabled = false;
        document.getElementById('endBtn').disabled = true;
    }
    if(!isStart){
        document.getElementById('wallBtn').disabled = false;
        document.getElementById('startBtn').disabled = false;
        document.getElementById('endBtn').disabled = false;
    }
}

function enableEnd(){
    isEnd = !isEnd;
    if(isEnd){
        document.getElementById('wallBtn').disabled = true;
        document.getElementById('startBtn').disabled = true;
        document.getElementById('endBtn').disabled = false;
    }
    if(!isEnd){
        document.getElementById('wallBtn').disabled = false;
        document.getElementById('startBtn').disabled = false;
        document.getElementById('endBtn').disabled = false;
    }
}

function reset(){
    initMaze(ROWS, COLS);
}