# Electron Temperature Conversion App
Temperature conversion from .csv or .txt file from either Celsius to Fahrenheit or Fahrenheit to Celsius and displays charts of both units as well as a table with both units. It uses React and Electron.

The React protion of this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation - Linux

Start a terminal in Linux then navigate to the project directory. From there run install.sh by typing:

`./install.sh`

The installation process will take a few minutes, but once it's done, navigate to the dist folder and double click the "Electron Temperature Conversion App-0.1.0.AppImage" file to start the Electron App. 

## Installation - Mac 

(These instructions are untested as I do not currently have access to a MacOS machine, but they are the best estimate I have)

Start a terminal window then navigate to the project directory. From there run install.sh by typing:

`./install.sh`

The installation process will take a few minutes, but once it's done, navigate to the dist folder and extract files from Electron Temperature Conversion App-0.1.0-mac.tar.gz. Go to the path you extracted it to, and go to Electron Temperature Conversion App.app/Contents/MacOS and run the application file. 

## Installation - Windows

Start a command line terminal then navigate to the project directory. From there run install.sh by typing:

`./install.sh`

The installation process will take a few minutes, but once it's done, navigate to the dist folder and double click the "Electron Temperature Conversion App-0.1.0.exe" file to start the Electron App. 

The format for the text/csv file that will work is as follows:

`Date, Temperature
01/01/2020, 40
01/02/2020, 32
...etc`

There are example files included in the repository example_files directory. One in Celsius (KORD-1994-01-C.txt) and one in Fahrenheit (tempdata.csv). 