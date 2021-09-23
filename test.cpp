#include<bits/stdc++.h>
#include "maze.h"

int main(int argc, char const *argv[])
{
	MazeSolver solver(8,8);
	solver.genMaze();
	solver.solve();
	solver.printMaze();

	std::cout<<"\n\n";
	system("pause");
	return 0;
}