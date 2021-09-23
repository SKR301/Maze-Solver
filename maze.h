class MazeSolver{
private:
	std::vector<std::vector<int>> maze;
	int ROW;
	int COL;
	std::queue<std::vector<int>> helperQueue;

public:
	MazeSolver(int,int);

	void genMaze();

	void solve();

	std::vector<std::vector<int>> getMaze();

	void insertBoxInQueue(int,int);

	void printMaze();

	void printQueue();

	bool isSolved(int,int);

	bool isVisited(int,int);

	bool isBlocked(int,int);

	void setNeighbour(int,int);

};

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

void MazeSolver::genMaze(){
	srand (time(NULL));
	for(int a = 0;a < this->ROW;a++){
		for(int b = 0;b < this->COL;b++){
			int val = rand() % 100;
			this->maze[a][b] = (val>60)? -1: 0;
		}
	}
	this->maze[0][4] = 1;
	insertBoxInQueue(0,4);
}

void MazeSolver::solve(){
		int currRow;
		int currCol;

	while(!this->helperQueue.empty()){
		printMaze();
		currRow = this->helperQueue.front()[0];
		currCol = this->helperQueue.front()[1];
		if(!isBlocked(currRow,currCol)){
			setNeighbour(currRow, currCol);
		}else{

		}
		this->helperQueue.pop();
	}
}

// check if maze is solved
bool MazeSolver::isSolved(int a,int b){
	return (this->maze[a][b] == this->ROW)? true: false;
}

// something new to check if the cell is visited
bool MazeSolver::isVisited(int a,int b){
	return  (this->maze[a][b] != 0)? true: false;
}

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
			// insertBoxInQueue(a-1,b);
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
			// insertBoxInQueue(a,b-1);
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
			// insertBoxInQueue(a+1,b);
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
			// insertBoxInQueue(a,b+1);
		}
	}
}

void MazeSolver::insertBoxInQueue(int a,int b){
	std::vector<int> box;
	box.push_back(a);
	box.push_back(b);
	this->helperQueue.push(box);
}

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

void MazeSolver::printQueue(){
	std::queue<std::vector<int>>q = this->helperQueue;
	while(!q.empty()){
		std::cout<<"["<<q.front()[0]<<","<<q.front()[1]<<"]";
		q.pop();
	}
}

std::vector<std::vector<int>> MazeSolver::getMaze(){
	return this->maze;
}
