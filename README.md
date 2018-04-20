# To do list

This app was designed to manage temporary data. It uses *localstorage* as storage, so while it is persistent some of the time, it is not a permanent storage. It is more a proof of concept rather than a finished app.

It is built using *typescript* and uses gulp and *browserify* as a task runner and module bundler. The HTML is built using *pug* javascript templating language.

# Notes
- Download or clone the project
- Install all dependencies using
```bash
npm install```
- To build the project and edit the source files, run
```bash
gulp watch```
- To build the project from the source files, run
```bash
gulp build```

The built files are inside the **build** folder.

# Branches
There are currently two branches.
## *class* branch
Is a branch that contains the version built during class lesson
## *master* branch
Is a branch that was built as a reference design.

To checkout the *class* branch, after you clone the project, run

```bash
git checkout -b class
```
To check out the *master* branch, run
```bash
git checkout -b master
```
