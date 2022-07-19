<h1 align="center">
  <br>
  <a href="https://eclypses.com"><img src="./Eclypses_I_C_S.png" alt="Eclypses Inc" width="200" style="margin-bottom:15px;"></a>
  <br>
  Eclypses Intern Project - RESTful API
  <br>
</h1>

<h4 align="center">PPBEA Summer Internship Project created by Matthew Cushing at <a href="https://eclypses.com" target="_blank">Eclypses Inc</a>.</h4>

<p align="center">
<img src="https://badgen.net/badge/project/part%200?color=DF5D39&labelColor=1C3243&icon=https://raw.githubusercontent.com/MatthewCushing/icons/develop/Eclypses_Icon_Vector.svg">
<img src="https://badgen.net/badge/language/javascript?color=DF5D39&labelColor=1C3243&icon=https://raw.githubusercontent.com/MatthewCushing/icons/develop/Eclypses_Icon_Vector.svg">
<img src="https://badgen.net/badge/frameworks/node,express,prisma?&color=DF5D39&labelColor=1C3243&icon=https://raw.githubusercontent.com/MatthewCushing/icons/develop/Eclypses_Icon_Vector.svg&list=|">
</p>

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#goals">Goals</a> •
  <a href="#specifications">Specifications</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#next-steps">Next Steps</a>
</p>

## OVERVIEW

During this internship, you will learn how to create a RESTful API in NodeJS, use GIT to manage a project, hit the endpoints of your API with a frontend website, and test it by using the Postman tool. This project will end with a presentation given to a small group of Eclypses engineers.

## GOALS

 + Learn the basics of NodeJS
 + Learn the basics of the ExpressJS library
 + Learn the basics of Prisma
 + Write a backend RESTful API that retrieves data from a database
    - Get back successful responses with expected results using Postman

> **Note** **Bonus**  
> Write a simple frontend webpage that uses your API

## SPECIFICATIONS

You will use Visual Studio Code to write your NodeJS code. General tutorials and exercises will be provided for you to follow, and the final project you create should be achievable with the accumulated skill set obtained throughout this internship program.

## Getting Started

### Install Software

 + Install VSCode
 + Install NodeJS and NPM
 + Install Postman
 + Install Github Desktop

### Create your project

 1. Fork this repository so you have a copy of it in your own GitHub account

 2. Using GitHub Desktop, create your repository with one of two options:
    - Initialize a new git repository in a new project directory called `eclypses-rest-api`
    - Clone your forked copy of this repository

 3. Use the terminal (iTerm) to navigate to your project directory
    <details>
    <summary>Click here if you need help</summary>

    ```bash
    ls                 # this will list everything in your current directory
    cd to/my/directory # this will allow you to change directory
    .                  # this means your current directory
    ..                 # this means moving up to the previous directory
    ```

    </details>

 4. Open your project in VSCode via the terminal
    <details>
    <summary>Click here if you need help</summary>

    **How the `code` command works**

    The `code` command, if used by itself, will open VSCode, else it will bring VSCode into focus if already open.

    The command has many different arguments you can pass it, but we will just focus on one, which is the default argument.  If you pass a path to a file or directory, an instance of VSCode will open with that file or directory open.

    ```bash
    code path/to/directory
    ```

    > **Note** **Reminder about the period**  
    > Remember that a period is an alias for the current directory you are located in.  Thus, if you have navigated to the project's root directory, pass a period as the argument.
    >
    > ```bash
    > code .
    > ```

    > **Warning** **No access to `code` command**   
    > Open VSCode manually and press <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>p</kbd>.  This will open a command palette where you need to search for `Shell Command`.  You will see an option labeled `Install code command in PATH`.  Click that option, restart your terminal, and you should now have access to the `code` command.

    </details>

 5. Initialize your project with NPM to setup your `package.json` file
    <details>
    <summary>Click here if you need help</summary>

    ```bash
    npm init -y
    ```

    </details>

 6. Set your project to use the more modern import syntax, ESM Modules
    <details>
    <summary>Click here if you need help</summary>

    1. Open your `package.json` file
    2. Set the `type` config option to `module`

        ```diff
        --- a/package.json
        +++ b/package.json
        @@ -11,6 +11,7 @@
            "url": "git+https://github.com/MatthewCushing/eclypses-rest-api.git"
          },
          "keywords": [],
        +  "type": "module",
          "author": "",
          "license": "ISC",
          "bugs": {
        ```

    </details>

### Setup Your Git Branches and Publish To Github

  1. Create a branch named `develop`
  2. This will be your primary branch used for development
  3. Create a feature branch named `feature/assignment-1`
  4. This will be where you will be doing all code for this assignment
     > **Warning** **Make commits regularly**  
     > A good rule of thumb is to make a commit every time you complete a “full thought” of code that compiles and runs without any errors

## Next Steps

I've gone ahead and made each branch in this repo a set of instructions to follow. Each branch will also have code in a similar progression to yours.  Go ahead and take a look at it to compare it against your own code.  See something you could have done better?  See something I could have done better?  Let me know!

Now that you have got your project setup and ready to go, go ahead and switch the branch to `guide/part-1` and read the README to get your first set of instructions.
