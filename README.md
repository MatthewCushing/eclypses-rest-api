<h1 align="center">
  <br>
  <a href="https://eclypses.com"><img src="./Eclypses_I_C_S.png" alt="Eclypses Inc" width="200" style="margin-bottom:15px;"></a>
  <br>
  Create a REST API With Two GET Request Routes
  <br>
</h1>

<h4 align="center">PPBEA Summer Internship Project created by Matthew Cushing at <a href="https://eclypses.com" target="_blank">Eclypses Inc</a>.</h4>

<p align="center">
<img src="https://badgen.net/badge/project/part%201?color=DF5D39&labelColor=1C3243&icon=https://raw.githubusercontent.com/MatthewCushing/icons/develop/Eclypses_Icon_Vector.svg">
<img src="https://badgen.net/badge/language/javascript?color=DF5D39&labelColor=1C3243&icon=https://raw.githubusercontent.com/MatthewCushing/icons/develop/Eclypses_Icon_Vector.svg">
<img src="https://badgen.net/badge/frameworks/node,express,prisma?&color=DF5D39&labelColor=1C3243&icon=https://raw.githubusercontent.com/MatthewCushing/icons/develop/Eclypses_Icon_Vector.svg&list=|">
</p>

<p align="center">
  <a href="#tasks">Tasks</a> •
  <a href="#goals">Goals</a> •
  <a href="#next-steps">Next Steps</a>
</p>

## Tasks

  1. Install the ExpressJS library as a dependency
     <details>
     <summary>Click here if you need help</summary>

     ```bash
     npm install express
     ```

     </details>

  2. Initialize ExpressJS as a server running on `http://localhost:3000`
  3. Create an array of objects called users that contains 10 user’s information as mockup data
  4. Create a 2 GET requests
      - One that returns all users at the route `http://localhost:3000/api/users`
      - One that returns a single user by ID at the route `http://localhost:3000/api/users/{userId}`

      > **Note** **The route `userId` is a Dynamic Route**  
      > The curly braces are used as guidance for a variable name that will be replaced with a user’s actual ID like so: `http://localhost:3000/api/users/4`

  5. Use the Postman application to confirm your API requests are working as intended
  6. Create a PR (Pull Request) for your branch to be merged into the develop branch to be reviewed

## Bonus

Look into and do some research on Prisma.  
We will be using Prisma as our ORM (Object Relational Mapper) to communicate with our database next!

## Next Steps

If done with your research, continue on by switching to the `guide/part-2` branch.
