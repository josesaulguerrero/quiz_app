# CHALLENGE - TRIVIA APP

## Table of contents

- [CHALLENGE - TRIVIA APP](#challenge---trivia-app)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
      - [Backend - API](#backend---api)
      - [Frontend](#frontend)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [How to run the backend - API](#how-to-run-the-backend---api)
    - [pre-requisites](#pre-requisites)
    - [steps](#steps)
  - [How to run the Frontend](#how-to-run-the-frontend)
    - [pre-requisites](#pre-requisites-1)
    - [steps](#steps-1)
  - [Author](#author)

## Overview

This is the solution for the challenge given by the Softka Team. The goal of this challenge is to model and design an API, which will later be consumed by a frontend application.

-   API: Its purpose is to persist the different groups of questions needed by the trivia and the names of the users that have achieved to enter the Hall Of Fame. Each question saved in the API must have four options, one correct and three incorrect.

-   Front-end: This is the visual part of the application, here users can answer random questions related to a given category, earn points after each round and find harder questions as the level increases. Finally, if the user achieves to beat the five rounds of the game, then their name will be saved in the API and other users will be able to see it in the Hall Of Fame.

### The challenge

Users should be able to:

-   Set a username, which will later be persisted if they manage to enter the Hall Of Fame.
-   Start the game and see a question related to the first category.
-   Pick up one of the four possible options.
-   If the selected option is incorrect, then the player will lose all of their points and the game will end.
-   If the selected option is correct, then the player will earn 5 times their current points and advance to the next round, where they will find a new question.
-   As the player advances, they will find questions with a higher difficulty level.
-   Players can also quit the game at any time and leave with their current amount of points.
-   Finally, if the player makes their way to the fifth round and answers all of the questions correctly, they will be sent to the Hall Of Fame, where their name will be persisted in the database.

### Screenshot

![screenshoot](https://i.postimg.cc/5jWCPwhT/image.png)

### Links

-   [Repository URL](https://github.com/josesaulguerrero/quiz_app)
-   [Frontend](https://funny-trivia.netlify.app/)
-   [API](https://desolate-everglades-91505.herokuapp.com/)

## My process

### Built with

#### Backend - API

-   [NestJS](https://docs.nestjs.com/) - This is a NodeJS progressive framework that gives you lots of tools to build modular and object-oriented applications.
-   [PostgreSQL](https://www.postgresql.org/) - An open-source relational database, very popular because of its great community support.
-   [Docker](https://www.docker.com/) - Docker is a container manager that allows you to develop, build and ship your applications much more easily.
-   [TypeORM](https://typeorm.io/) - TypeORM is one of the most popular Object-Relational Mappers when talking about TypeScript.
-   [TypeScript](https://www.typescriptlang.org/) - TypeScript is a super set of JavaScript which comes with many features that help devs avoid production bugs.
-   [Heroku](https://heroku.com/) - Heroku is a PAAS (Platform As A Service) that helps you deploy and continuously deliver your applications.

#### Frontend

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   Mobile-first workflow
-   [create-react-app](https://create-react-app.dev/docs/) - A very handy tool that helps devs setup a react app in just a few minutes.
-   [React](https://reactjs.org/) - The most popular JS library when talking about building front-end applications.
-   [Custom hooks](https://reactjs.org/docs/hooks-custom.html) - Custom hooks are a very useful feature of react, available since React 16.8, these hooks let you encapsulate and re-use logic very easily.
-   [Context API](https://reactjs.org/docs/context.html#gatsby-focus-wrapper) - Yet another feature of React, the context API lets you pass data through the components tree avoiding one of the most common problems in React: Props drilling.
-   [TypeScript](https://www.typescriptlang.org/docs/) - TypeScript is a super set of JavaScript which comes with many features that help devs avoid production bugs.

### What I learned

Building this project helped me learn to use and improve my knowledge of some JS and TS tools, such as:

-   First of all, building a full-stack application on my own and managing to connect all of the pieces.
-   Using NestJS and TypeScript to create DTOs and entities that validate the data sent by the client.
-   Using TypeORM and class-validator to model and design the different entities involved in the business logic.
-   Randomly sort and array.
-   Deploying a NestJS application to Heroku and connect it to a remote database.
-   Developing a full-stack project in the same git repository.
-   Using TypeScript features inside a React project to type my components and the data fetched from the API.
-   Sharing a global state through the context API.
-   Using the useEffect hook to handle my requests to the API.
-   Creating styles that behave one way or another depending on the logic behind the application.

### Useful resources

-   [How to Deploy a full-stack app](https://levelup.gitconnected.com/deploy-pern-fullstack-app-on-heroku-and-netlify-automatic-deploy-9b61ac6a254e) - Without this article I wouldn't have been able to deploy the API, it really gives you a lot of useful information.
-   [Trivia app design](https://dribbble.com/shots/16217895-Quiz-Mobile-App) - I took some inspiration from this design to create my UI.
-   [How to shuffle an array](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array) - As usual, stack-overflow is a platform where you can find very useful information to solve your problems.

## How to run the backend - API

### pre-requisites

-   You need to have NodeJS and NPM installed in your computer. Follow these instructions to install Node and NPM: (Windows and Mac) [NodeJS](https://nodejs.org/en/download/) or (Linux) [NVM](https://github.com/nvm-sh/nvm).
-   You also need to have installed [docker](https://docs.docker.com/engine/install/) and [docker-compose](https://docs.docker.com/compose/install/) to run the postgres database.

### steps

1.  First of all, clone this repository:
    ```shell
    git clone https://github.com/josesaulguerrero/quiz_app.git
    ```
2.  Then please run:
    ```shell
    npm install
    ```
    This command will install the dependencies and packages that the application requires to run.
3.  After you're done with the previous steps, go to your terminal or command shell and run the following command:
    ```shell
    npm run docker:up
    ```
    This will tell docker-compose to read the docker-compose.yml file and create the database service.
4.  Now you should go to the **server/** folder. Inside it create a **.env** file and add the following properties variables:

    ```shell
    DATABASE_URL=postgres://admin:admin_password@localhost:5432/quiz_app
    ```

    This will set up the environment variables, so that the backend will work when you try to run the application. If you try to run the application without having set this variable, you will get lots of errors, be careful.

    **Remember, the value of DATABASE_URL MUST match the properties set in the docker-compose.yml file**

    -   Optionally, you can set another environment variable.

        ```shell
        PORT=8000
        ```

        This variable tells the server in which port it should run when you start the application.

5.  After you run all of these commands and set the required variables, then you should be able to run the **ORM migrations**. Run the following command:

    ```shell
    npm run migrations:generate -- "initial_migration" && npm run migrations:run
    ```

    This will read the **.entity.ts** files and create the corresponding tables in the Database.

    **make sure the postgres database service is up running**

6.  Finally, after this long process, you should be able to run the command that will start the server and run the application in **watch mode**

    ```
    npm run start:dev
    ```

And there you go, the app should be app and running in the specified port (:3000) if you didn't set any

## How to run the Frontend

### pre-requisites

-   You need to have NodeJS and NPM installed in your computer. Follow these instructions to install Node and NPM: (Windows and Mac) [NodeJS](https://nodejs.org/en/download/) or (Linux) [NVM](https://github.com/nvm-sh/nvm).

### steps

1.  First of all, clone this repository:
    ```shell
    git clone https://github.com/josesaulguerrero/quiz_app.git
    ```
2.  Then please run:
    ```shell
    npm install
    ```
    This command will install the dependencies and packages that the application requires to run.
3.  After you're done with the previous steps, go to the **client/** folder. Inside it create a **.env** file and add the following properties variables:

    ```shell
    REACT_APP_API_BASE_URL=url_to_your_api
    ```

    This will set up the environment variables, so that the backend will work when you try to run the application. If you try to run the application without having set this variable, you will get lots of errors, be careful.

    **If you don't have an API, then feel free to use mine: https://desolate-everglades-91505.herokuapp.com/api/v1/**

4.  Finally, run the following command to start the application in watch-mode:
    ```shell
    npm run start
    ```

And now you're done! I hope you enjoyed the process :)

## Author

-   Website - [Jose Saúl Guerrero Serrano](https://joseguerreroserrano.netlify.app/)
-   Github - [@josesaulguerrero](https://github.com/josesaulguerrero)
