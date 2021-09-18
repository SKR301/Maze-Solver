class MazeSolver{
private:
	std::vector<std::vector<int>> maze;
	int row;
	int col;
	std::queue<int[2]> result;

public:
	MazeSolver(int,int);

	void genMaze();

	// void solve();

	std::vector<std::vector<int>> getMaze();

	void printMaze();
};

MazeSolver::MazeSolver(int r, int c){
	this->row = r;
	this->col = c;

	for(int a = 0;a < this->row;a++){
		std::vector<int> temp;
		temp.clear();

		for(int b = 0;b < this->col;b++){
			temp.push_back(0);
		}
		
		this->maze.push_back(temp);
	}
}

void MazeSolver::genMaze(){
	srand (time(NULL));
	for(int a = 0;a < this->row;a++){
		for(int b = 0;b < this->col;b++){
			int val = rand() % 100;
			this->maze[a][b] = (val>60)? -1: 0;
		}
	}
	this->maze[0][4] = 0;
}

// void MazeSolver::solve(){
// 	int box[2];

// 	box[0]=0; box[1]=4;

// 	result.

// }

void MazeSolver::printMaze(){
	for(int a = 0;a < this->row;a++){
		for(int b = 0;b < this->col;b++){
			std::cout<<this->maze[a][b]<<"\t";
		}
		std::cout<<"\n";
	}
}

std::vector<std::vector<int>> MazeSolver::getMaze(){
	return this->maze;
}