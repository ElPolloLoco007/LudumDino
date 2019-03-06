# How to

[Our project structure](#Structure)

[Get ready to code](#Start-coding)

[Push to github](#Upload-your-work)

## Setup

### Git and Github

[Git setup](Github.md)

### Communation and Tasks managment

[Communation & tasks](Communation.MD)

### Jest

[Jest](Jest.md)

## Structure

The folder structure in our game engine is like this.

- LudumGameEngine
  - .circleci (setup for continuous integration)
  - extra (diagram etc.)
  - HowTo (setup and help)
  - ~~node_modules (react library)~~
  - src (where the code is)
    - \_\_tests\_\_
    - game
    - gameEngine
      - components
      - entity.js
    - resource
      - images
      - audio
    - style (.css)
    - utils
  - packages and more

## Github commands

### Start coding

#### Step 1.

Goto the LudumGameEngine repo in github.com

#### Step 2

Create a new branch **branch name should be the same as the task name**

#### Step 3.

1. Open LudumGameEngine in vscode
2. Open terminal in vscode. (Ctrl+Shift+æ)
3. Write these commands:
   1. <code>git fetch</code> (getting the newest from LudumGameEngine)
   2. <code>git pull</code> (make sure you are up to date)
   3. <code>git checkout **_[name of your branch]_** </code> (f.x. git checkout KT-Player-Class) this switches your work space into your branch
4. Code or do what your task needs.

#### Step 4.

In terminal:

1. npm i
2. npm install --save file-loader url-loader
3. npm install --save style-loader css-loader
4. npm start

### Upload your work

To upload your work you need to write these commands

1. <code>git status</code> (see a list of modified files)
2. <code>git add .</code> (add all to list) or <code>git add **_[filename]_** </code> (choose which files should be added to list)
3. <code>git commit -m" **_[short description]_** "</code> (needed)
4. <code>git push</code> (pushes your work into your branch on github)

Now your branch on github should be up to date with your work. To merge this into master, make a PR(pull request) and assign someone as a reviewer.
When your work is approved, you can merge into master.
