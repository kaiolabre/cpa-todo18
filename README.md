# To do list

This app was designed to manage temporary data. It uses *localstorage* as storage, so while it is persistent some of the time, it is not a permanent storage. It is more a proof of concept rather than a finished app.

It is built using *typescript* and uses gulp and *browserify* as a task runner and module bundler. The HTML is built using *pug* javascript templating language.

# Notes
- Download or clone the project
- Install all dependencies using *npm install*
- To build the project and edit the source files, run ``` gulp watch```

- To build the project from the source files, run ```gulp build``` 


The built files are inside the **build** folder.

# Cloning the project to your computer
To clone the project, create a folder on your desktop. Open **terminal** or the **command** window and navigate to the desktop. 

On a **Mac** or **Linux**, you will need to type 

```bash 
cd ~/desktop/folder_name
``` 
On **Windows** you will need to type
```
cd C:\Users\user_name\desktop\folder_name
```
Once inside the folder you will need to type
```
git clone https://github.com/johannesmu/cpa-todo18.git .
```
Note that there is a *dot* at the end of the command.

This will clone the project into your folder. Once the cloning of the project is finished, you can install the dependencies using 
```
npm install
```
# Branches
There are currently two branches. While they are functionally the same, they may contain some differences

## *class* branch
Is a branch that contains the version built during the class lesson

## *master* branch
Is a branch that was built as a reference design.

To checkout the *class* branch, after you clone the project, run

```bash
git checkout class
```
To check out the *master* branch, run
```bash
git checkout master
```
