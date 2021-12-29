var ROWS = 0;
var COLS = 0;

var isWall;
var isStart;
var isEnd;

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
                document.getElementById('cell_'+(a)+'_'+(b)).className = 'col border border-dark rounded bg-info text-center';
                document.getElementById('cell_'+(a)+'_'+(b)).style.display = 'flex'; 
                document.getElementById('cell_'+(a)+'_'+(b)).style.justifyContent = 'center'; 
                document.getElementById('cell_'+(a)+'_'+(b)).style.alignItems = 'center'; 
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

var isMouseDown = false;
document.body.onmousedown = function() { 
    isMouseDown = true;
}
document.body.onmouseup = function() {
    isMouseDown = false;
}


function createMaze(rows,cols){
    initMaze(rows, cols);

    var height = 0;
    if(rows == 5){
        height = 150;
    }
    if(rows == 8){
        height = 94;
    }
    if(rows == 10){
        height = 75;
    }
    if(rows == 15){
        height = 50;
    }
    if(rows == 20){
        height = 38;
    }
    if(rows == 25){
        height = 30;
    }
    if(rows == 50){
        height = 15;
    }

    document.getElementById('maze').innerHTML = '';
    for(var a=0;a<rows;a++){
        var row = document.createElement('div');
            row.id = 'row'+(a);
            row.className = 'row';
        for(var b=0;b<cols;b++){
            var cell = document.createElement('div');
                cell.id = 'cell_'+(a)+'_'+(b);
                cell.className = 'col border border-dark rounded bg-info text-center align-middle';
                cell.style.display = 'flex'; 
                cell.style.justifyContent = 'center'; 
                cell.style.alignItems = 'center'; 
                cell.onclick = function(){clickedCell(this)};
                cell.onmouseover = function(){hoveredCell(this)};
                cell.style.height = height+'px';
            
            row.appendChild(cell);
        }
        document.getElementById('maze').appendChild(row);
    }
}