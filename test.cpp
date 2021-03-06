#include<bits/stdc++.h>
#include "maze.h"

int main(int argc, char const *argv[])
{
	std::vector<int> maze = {	-1,	-1,	-1,	0,	0,	0,	-1,	-1,
							 	-1,	-1,	-1,	0,	-1,	-1,	-1,	-1,
							 	-1,	-1,	-1,	0,	0,	0,	0,	-1,
							 	-1,	-1,	-1,	-1,	-1,	0,	0,	-1,
							 	-1,	-1,	-1,	-1,	-1,	0,	-1,	-1,
							 	-1,	-1,	-1,	-1,	-1,	0,	-1,	-1,
							 	0,	0,	0,	0,	0,	0,	-1,	-1,
							 	0,	-1,	0,	-1,	-1,	0,	-1,	-1
							};

	// MazeSolver solver(maze,8,8);
	MazeSolver solver(8,8);
	solver.genMaze(40);
	solver.solve();
	solver.printMaze();
	solver.printSol();

	std::cout<<"\n\n";
	system("pause");
	return 0;
}