<h1 align="center">
  <br>
  <a href="https://eclypses.com"><img src="./Eclypses_I_C_S.png" alt="Eclypses Inc" width="200" style="margin-bottom:15px;"></a>
  <br>
  Eclypses<sup style="font-size:8px;">TM</sup> Intern Project - RESTful API
  <br>
</h1>

<h4 align="center">PPBEA Summer Internship Project created by Matthew Cushing at <a href="https://eclypses.com" target="_blank">Eclypses Inc</a>.</h4>

<p align="center">
<img src="https://badgen.net/badge/project/part%201?color=DF5D39&labelColor=1C3243&icon=https://raw.githubusercontent.com/MatthewCushing/icons/develop/Eclypses_Icon_Vector.svg">
<img src="https://badgen.net/badge/language/javascript?color=DF5D39&labelColor=1C3243&icon=https://raw.githubusercontent.com/MatthewCushing/icons/develop/Eclypses_Icon_Vector.svg">
<img src="https://badgen.net/badge/frameworks/node,express,prisma?&color=DF5D39&labelColor=1C3243&icon=https://raw.githubusercontent.com/MatthewCushing/icons/develop/Eclypses_Icon_Vector.svg&list=|">
</p>

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#goals">Goals</a> •
  <a href="#specifications">Specifications</a> •
  <a href="#checklist">Checklist</a>
</p>

## OVERVIEW

During this internship, you will learn how to create a RESTful API in NodeJS, use GIT to manage a project, hit the endpoints of your API with a frontend website, and test it by using the Postman tool. This project will end with a presentation given to a small group of Eclypses engineers.

## GOALS

 + Learn the basics of NodeJS
 + Learn the basics of the ExpressJS library
 + Learn the basics of Prisma
 + Write a backend RESTful API that retrieves data from a database
    - Get back successful responses with expected results using Postman

> **Note**  
> **BONUS**  
> Write a simple frontend webpage that uses your API

## SPECIFICATIONS

You will use Visual Studio Code to write your NodeJS code. General tutorials and exercises will be provided for you to follow, and the final project you create should be achievable with the accumulated skill set obtained throughout this internship program.

## CHECKLIST

### Getting Started

 + Install VSCode
 + Install NodeJS and NPM
 + Install Postman
 + Install Github Desktop

### Create your project

 1. Using Github Desktop, initialize your project as a git repository in a new project directory called `eclypses-rest-api`

 1. Use the terminal (iTerm) to navigate to your project directory
    <details>
    <summary>Click here if you need help</summary>

    ```bash
    ls                 # this will list everything in your current directory
    cd to/my/directory # this will allow you to change directory
    .                  # this means your current directory
    ..                 # this means moving up to the previous directory
    ```

    </details>

 1. Initialize your project with NPM to setup your package.json file for you
    <details>
    <summary>Click here if you need help</summary>

    ```bash
    npm init -y
    ```

    </details>

 1. Open your project in VSCode via the terminal
    <details>
    <summary>Click here if you need help</summary>

    ```bash
    code .
    ```

    </details>

 1. Install ExpressJS
    <details>
    <summary>Click here if you need help</summary>

    ```bash
    npm install express
    ```

    </details>

### Setup Your Git Branches and Publish To Github

  1. Create a branch named `develop`
  1. This will be your primary branch used for development
  1. Create a feature branch named `feature/assignment-1`
  1. This will be where you will be doing all code for this assignment
     > **Warning**  
     > **Make commits regularly**  
     > A good rule of thumb is to make a commit every time you complete a “full thought” of code that compiles and runs without any errors
