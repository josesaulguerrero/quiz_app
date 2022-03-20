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
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [How to run locally](#how-to-run-locally)
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

Building this project helped me learn to use and improve my knowledge of some React, JS and TS tools, such as:

### Continued development

### Useful resources

## How to run locally

1. You need to have NodeJS, NPM and Yarn installed in your computer. Follow these instructions to install Node and NPM: (Windows and Mac) [NodeJS](https://nodejs.org/en/download/) or (Linux) [NVM](https://github.com/nvm-sh/nvm).

## Author

-   Website - [Jose Saúl Guerrero Serrano](https://joseguerreroserrano.netlify.app/)
-   Github - [@josesaulguerrero](https://github.com/josesaulguerrero)
