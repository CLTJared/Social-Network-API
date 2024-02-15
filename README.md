# Social Network API
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## Table of Contents
* [Installation](#Installation)
* [Dependances](#dependancies)
* [Usage](#Usage)
* [Screenshot(s)](#screenshot)
* [Demo](#demo)
* [Questions / Feedback](#questions--feedback)

## Installation
Clone the github library by running the following in your command prompt.
```
git clone git@github.com:CLTJared/Social-Network-API.git
```

1. After cloning, run `npm i` to install required package(s).
2. Run `npm run seed` to create initial seed of database
3. Run `npm start` to run server, or run `npm run dev`

### Dependancies
* NodeJS
* ExpressJS
* Mongoose
* MongoDB
    * See [MongoDB Installation](https://www.mongodb.com/docs/manual/installation/) and select your platform for instructions on installing

### Usage
User Routes - `localhost:3001/api/users/`
* **GET**: View single user - `localhost:3001/api/users/:userId`
* **POST**: Create new user = `localhost:3001/api/users`
* **PUT**: Update user information = `localhost:3001/api/users/:userId`
    ```json
    //example json load
    {
        "username": "your-username",
        "email": "your-email"
    }
    ```
* **PUT**: Add Friend - `localhost:3001/api/users/:userId/friends/:friendId`
* **DELETE**: Delete Friend - `localhost:3001/api/users/:userId/friends/:friendId`

----

Thought Routes - `localhost:3001/api/thoughts`
* GET: `:thoughtId` - Single thought
* POST: Create New Thought
    ```json
    //example json load
    {
        "thoughtText": "Here's a cool thought...",
        "username": "JaredUNCC",
        "userId": "65cc23181a85e9e9536ec572"
    }
    ```
* 

### Screenshot

### Demo

## Questions / Feedback