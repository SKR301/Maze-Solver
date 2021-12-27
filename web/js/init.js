var ROWS = 0;
var COLS = 0;
var maze = [];
var startPos = {x: -1, y: -1};
var endPos = {x: -1, y: -1};

function initMaze(rows,cols){
    ROWS = rows;
    COLS = cols;
    
    maze = Array.from({ length: ROWS }, () => 
        Array.from({ length: COLS }, () => 0)
    );
    
    for(a=0;a<ROWS;a++){
        for(b=0;b<COLS;b++){
            maze[a][b] = 0;
            if(document.getElementById('cell_'+(a)+'_'+(b)) != undefined){
                document.getElementById('cell_'+(a)+'_'+(b)).innerHTML = '';
                document.getElementById('cell_'+(a)+'_'+(b)).style.backgroundColor = 'grey';
            }
        }
    }

    startPos = {x: -1, y: -1};
    endPos = {x: -1, y: -1};
    
    isWall = false;
    isStart = false;
    isEnd = false;
    isSolvePressed = false;

    document.getElementById('wallBtn').disabled = false;
    document.getElementById('startBtn').disabled = false;
    document.getElementById('endBtn').disabled = false;
}