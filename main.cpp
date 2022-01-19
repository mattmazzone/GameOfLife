#include <iostream>
#include <fstream>
#include <string>

using namespace std;

//Global variables
int lineCounter = 1;

//Dynamic Arrays
int sectionSize = 1;
string *sectionArray = new string[50];
int *sectionLinenum = new int[50];


//Function stores the section names and line numbers in a dynamic array 
void
sectionNames (string inp)
{
  size_t foundStart;
  size_t foundEnd;

  foundStart = inp.find ("<<");
  foundEnd = inp.find (">>");
  if (foundStart != std::string::npos && foundEnd != std::string::npos)
    {

      foundStart = foundStart + 2;
      foundEnd = foundEnd;


      for (int i = foundStart; i < inp.length (); i++)
	{
	  if (inp[i] == ' ')
	    {
	      foundStart++;

	    }
	  else
	    {
	      break;
	    }
	}
      for (int i = foundEnd; i < inp.length (); i--)
	{
	  if (inp[i] == ' ')
	    {
	      foundEnd--;
	    }
	  else
	    {
	      break;
	    }
	}

      sectionArray[sectionSize - 1] =
	inp.substr (foundStart, foundEnd - foundStart - 1);
      sectionLinenum[sectionSize - 1] = lineCounter;
      sectionSize++;
    }

}

void
detectCheckboxes (string inp)
{
  size_t found;

  found = inp.find ("( )");
  if (found != std::string::npos)
    {

      found = found + 3;
      for (int i = found; i < inp.length (); i++)
	{
	  if (inp[i] == ' ')
	    {
	      found++;

	    }
	  else
	    {
	      break;
	    }
	}



      cout << inp.substr (found) << endl;
    }

}


int
main ()
{
  string input;
  int totalLines = 0;
  int charCounter = 0;



  ifstream inFile ("example.txt");


  //Get section names and line numbers
  if (inFile.is_open ())
    {

      while (getline (inFile, input))
	{

	  sectionNames (input);


	  lineCounter++;
	}

      inFile.close ();
    }
  else
    {
      cout << "Unable to open file";
    }

  totalLines = lineCounter;
  sectionLinenum[sectionSize - 1] = totalLines;	//Add last line of file to array
  //Get content of sections






  lineCounter = 1;
  ifstream inFile1 ("example.txt");
  if (inFile1.is_open ())
    {

      while (getline (inFile1, input))
	{
	
		
	  for (int i = 0; i < sectionSize; i++)
	    {

	      if (lineCounter > sectionLinenum[i] && lineCounter < sectionLinenum[i + 1]) {

		  //detectCheckboxes(input);
		}
		
	    }






	  lineCounter++;
	}

      inFile1.close ();
    }

  else
    {
      cout << "Unable to open file";
    }






  //Testing sectionNames() *working, dynamic size?*



  ofstream outFile ("output.txt");
  if (outFile.is_open ())
    {

      outFile << R"_(<!DOCTYPE html>
<html lang=" en ">
<head>
  <title>Hello, world!</title>
  <meta charset=" UTF - 8 " />
  <meta name=" viewport " content=" width = device - width, initial - scale = 1 " />
  <meta name=" description " content=" " />
</head>
<body>)_" << endl;

      for (int i = 0; i < sectionSize; i++)	{
	  outFile << R"_(<h2>)_" << sectionArray[i] << R"_(</h2>)_" <<endl;
	  
	  
	  
	}






      outFile.close ();
    }

  else
    {
      cout << "Unable to open file";
    }






//Free memory
  delete[]sectionArray;

  return 0;
}
