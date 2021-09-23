class MazeSolver{
private:
	std::vector<std::vector<int>> maze;
	int ROW;
	int COL;
	std::queue<std::vector<int>> helperQueue;

public:
	MazeSolver(int,int);

	MazeSolver(std::vector<int>, int, int);

	void genMaze();

	void solve();

	std::vector<std::vector<int>> getMaze();

	void insertBoxInQueue(int,int);

	void printMaze();

	void printQueue();

	bool isSolved();

	bool isVisited(int,int);

	bool isBlocked(int,int);

	void setNeighbour(int,int);

};

// constructor for row and col
MazeSolver::MazeSolver(int r, int c){
	this->ROW = r;
	this->COL = c;

	for(int a = 0;a < this->ROW;a++){
		std::vector<int> temp;
		temp.clear();

		for(int b = 0;b < this->COL;b++){
			temp.push_back(0);
		}
		
		this->maze.push_back(temp);
	}
}
	
// constructor with row, col and maze
MazeSolver::MazeSolver(std::vector<int> input, int r, int c){
	this->ROW = r;
	this->COL = c;

	for(int a=0;a<r;a++){
		std::vector<int> temp;
		temp.clear();
		for(int b=0;b<c;b++){
			temp.push_back(input[a*8 + b]);
		}
		this->maze.push_back(temp);
	}
}

// generates a random maze
void MazeSolver::genMaze(int blocksPercentage){
	srand (time(NULL));
	for(int a = 0;a < this->ROW;a++){
		for(int b = 0;b < this->COL;b++){
			int val = rand() % 100;
			this->maze[a][b] = (val>blocksPercentage)? 0: -1;
		}
	}
}

//ALGO starts with [0,4]
void MazeSolver::solve(){
	this->maze[0][4] = 1;									// change starting cell here [0,4]
	insertBoxInQueue(0,4);									// and here too
	int currRow;
	int currCol;

	while(!this->helperQueue.empty()){
		currRow = this->helperQueue.front()[0];
		currCol = this->helperQueue.front()[1];

		if(currRow == this->ROW-1){
			break;
		}

		if(!isBlocked(currRow,currCol)){
			setNeighbour(currRow, currCol);
		}else{

		}
		this->helperQueue.pop();
	}

	if(isSolved()){
		std::cout<<"\n\nSolved Successfully";
	} else {
		std::cout<<"\n\nNo possible Solution";
	}
}

// check if maze is solved
bool MazeSolver::isSolved(){
	for(int b=0;b<this->COL;b++){
		if(this->maze[this->ROW-1][b] != 0 && this->maze[this->ROW-1][b] != -1){
			return true;
		}
	}
	return false;
}

// check if cell is filled/visited
bool MazeSolver::isVisited(int a,int b){
	return  (this->maze[a][b] != 0)? true: false;
}

//
bool MazeSolver::isBlocked(int a,int b){
	return  (this->maze[a][b] == -1)? true: false;
}

void MazeSolver::setNeighbour(int a,int b){

	int possibleVal = this->maze[a][b] + 1;
	if(a!=0){
		if(!isBlocked(a-1,b)){
			if(isVisited(a-1,b)){
				this->maze[a-1][b] = std::min(possibleVal, this->maze[a-1][b]);
			}else{
				this->maze[a-1][b] = possibleVal;
				insertBoxInQueue(a-1,b);
			}
		}
	}
	if(b!=0){
		if(!isBlocked(a,b-1)){
			if(isVisited(a,b-1)){
				this->maze[a][b-1] = std::min(possibleVal, this->maze[a][b-1]);
			}else{
				this->maze[a][b-1] = possibleVal;
				insertBoxInQueue(a,b-1);
			}
		}
	}
	if(a!=this->ROW){
		if(!isBlocked(a+1,b)){
			if(isVisited(a+1,b)){
				this->maze[a+1][b] = std::min(possibleVal, this->maze[a+1][b]);
			}else{
				this->maze[a+1][b] = possibleVal;
				insertBoxInQueue(a+1,b);
			}
		}
	}
	if(b!=this->COL){
		if(!isBlocked(a,b+1)){
			if(isVisited(a,b+1)){
				this->maze[a][b+1] = std::min(possibleVal, this->maze[a][b+1]);
			}else{
				this->maze[a][b+1] = possibleVal;
				insertBoxInQueue(a,b+1);
			}
		}
	}
}

//add a cell to queue
void MazeSolver::insertBoxInQueue(int a,int b){
	std::vector<int> box;
	box.push_back(a);
	box.push_back(b);
	this->helperQueue.push(box);
}

//display maze
void MazeSolver::printMaze(){
	std::cout<<"\n\n";
	for(int a = 0;a < this->ROW;a++){
		for(int b = 0;b < this->COL;b++){
			if(this->maze[a][b] == -1){
				std::cout<<"X"<<"\t";
			} else if(this->maze[a][b] == 0){
				std::cout<<"-"<<"\t";
			} else {
				std::cout<<this->maze[a][b]<<"\t";
			}
		}
		std::cout<<"\n";
	}
}

//display maze
void MazeSolver::printQueue(){
	std::cout<<"\n\n";
	std::queue<std::vector<int>>q = this->helperQueue;
	while(!q.empty()){
		std::cout<<"["<<q.front()[0]<<","<<q.front()[1]<<"]";
		q.pop();
	}
}

//return maze
std::vector<std::vector<int>> MazeSolver::getMaze(){
	return this->maze;
}
