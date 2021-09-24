/*TO COLOUR THE CLI TEXT*/
#include<windows.h>

class logger{
private:
	int front;
	int back;
public:
	void log(std::string,std::string="white",std::string="black");
	int retCol(std::string);
};


void logger::log(std::string text,std::string textCol,std::string bgCol){		//print the text with provided colours (white on black by default) 
	HANDLE hConsole = GetStdHandle(STD_OUTPUT_HANDLE);

	front=(retCol(textCol));
	back=(retCol(bgCol));

	if(front==-1){							//set default for illegal values
		front=15;
	}
	if(back==-1){
		back=0;
	}

    SetConsoleTextAttribute(hConsole, (back*16+front)%255);
    std::cout<<text;
}

int logger::retCol(std::string col){				//return integer value for passed colours
	if(col=="green")return 10;
	if(col=="blue")return 11;
	if(col=="red")return 12;
	if(col=="yellow")return 14;
	if(col=="white")return 15;
	if(col=="black")return 0;

	return -1;
}