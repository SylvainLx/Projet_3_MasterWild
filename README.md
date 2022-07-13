## Concept

This template is meant to serve as a foundation for every P2/P3 following the React-Express-MySQL stack, as learned in Wild Code School.
We used this template for our final project where our client was the Wild Code School.

The objective of this application is to allow the wild code school to share the masterclasses that have been done with their partner companies. The school offers a large choice of videos and fields to discover.

## Setup & Use

- `npx prisma migrate dev` : Update the database (go to "cd backend" before doing the command)
- copy and paste the ".env.sample" documents (both in the front and back) and remove the ".sample" extension before changing the content accordingly.

### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `npm run setup`
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_

### Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

## FAQ

### Tools

- _Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Argon2_ : Is used to hash the passwords
- _Axios_ : Promise-based HTTP client for browser and node.js
- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Cookie-parser_ : Middleware which parses cookies attached to the client request object
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Emailjs_ : Allows us to send emails directly from your client-side JavaScript code
- _Formik_ : Helps with three things : Getting values in and out of form state, Validation and error messages, Handling form submission
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Joi_ : Helps to control the input fields
- _Jsonwebtoken_ : Open standard used to share security information between two parties — a client and a server
- _Multer_ : Handling multipart/form-data, which is primarily used for uploading files
- _Nodemon_ : Allows to restart the server everytime a .js file is udated
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _Prisma_ : Model your data in the Prisma schema in a human-readable format
- _Prop-types_
- _React-burger-menu_ : Allows you to create a sidebar for your React applications
- _React-csv_ : Build CSV files on the fly basing on Array/literal object of data
- _React-dom_ : Used at the top level of a web app to enable an efficient way of managing DOM elements of the web page
- _React-icons_ : Used to add icons (from a large library), easily into the application
- _React-modal_ : Allows to create easy modals in the application
- _React-router_ : A tool that allows you to handle routes in a web app, using dynamic routing
- _React-router-dom_
- _React-spring-3d-carousel_ : 3D Carousel component for images built with React and utilizing react-spring for controlling slide transitions
- _React-toastify_ : Allows you to add notifications to your app with ease
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _Yup_ : Helps to control the input fields
