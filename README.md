<h1 align="center">
  <br>
  <a href="https://eclypses.com"><img src="./Eclypses_I_C_S.png" alt="Eclypses Inc" width="200" style="margin-bottom:15px;"></a>
  <br>
  Create a REST API With Two GET Request Routes
  <br>
</h1>

<h4 align="center">PPBEA Summer Internship Project created by Matthew Cushing at <a href="https://eclypses.com" target="_blank">Eclypses Inc</a>.</h4>

<p align="center">
<img src="https://badgen.net/badge/project/part%202?color=DF5D39&labelColor=1C3243&icon=https://raw.githubusercontent.com/MatthewCushing/icons/develop/Eclypses_Icon_Vector.svg">
<img src="https://badgen.net/badge/language/javascript?color=DF5D39&labelColor=1C3243&icon=https://raw.githubusercontent.com/MatthewCushing/icons/develop/Eclypses_Icon_Vector.svg">
<img src="https://badgen.net/badge/frameworks/node,express,prisma?&color=DF5D39&labelColor=1C3243&icon=https://raw.githubusercontent.com/MatthewCushing/icons/develop/Eclypses_Icon_Vector.svg&list=|">
</p>

<p align="center">
  <a href="#tasks">Tasks</a> •
  <a href="#bonus">Bonus</a> •
  <a href="#next-steps">Next Steps</a>
</p>

## Tasks

  1. Move your two GET requests to a new file called `User.js` inside a directory named `routes` by using the `express.Router` class

  2. Use nested routing with the `express.Router` class to modify your current routes to be nested inside of a router that has the route `/api`
      - This will allow your routes to be more precise and easier to read with `/users` instead of `/api/users` as well as any additional routes you may add

  3. Add a POST request in your `User.js` file that allows you to add a new user by passing an object at the route `/api/users`
     <details>
     <summary>Click here to see the object</summary>

     ```js
     {
      id: idVariable
      firstName: firstNameVariable,
      lastName: lastNameVariable,
      email: emailVariable,
     }
     ```

     </details>

  4. Create a PUT request that allows you to update a specific user's information by passing an object at the route `/api/users/${userId}`
     <details>
     <summary>Click here to see the object</summary>

     ```js
     {
      firstName: firstNameVariable,
      lastName: lastNameVariable,
      email: emailVariable,
     }
     ```

     </details>

  5. Create a DELETE request that allows you to delete a user at the route `/api/users/${userId}`

  6. Use the Postman application to confirm your API requests are working as intended

  7. Create a PR (Pull Request) for your branch to be merged into the develop branch to be reviewed

## Bonus

Look into and do some research on Prisma.  
We will be using Prisma as our ORM (Object Relational Mapper) to communicate with our database next!

## Next Steps

If done with your research, continue on by switching to the `guide/part-2` branch.
