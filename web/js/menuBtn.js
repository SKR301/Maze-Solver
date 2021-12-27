var isWall = false;
var isStart = false;
var isEnd = false;

document.getElementById('wallBtn').click();

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
    maze = Array.from({ length: ROWS }, () => 
        Array.from({ length: COLS }, () => 0)
    );
    
    startPos = {x: -1, y: -1};
    endPos = {x: -1, y: -1};
}