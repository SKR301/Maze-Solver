function initMaze(rows,cols){
    ROWS = rows;
    COLS = cols;
    
    maze = Array.from({ length: ROWS }, () => 
        Array.from({ length: COLS }, () => 0)
    );
    
    for(a=0;a<ROWS;a++){
        for(b=0;b<COLS;b++){
            maze[a][b] = 1;
        }
    }
}