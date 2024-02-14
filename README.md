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

#### Routes
User Routes
* **GET**: View single user - `localhost:3001/api/users/:userId`
* **POST**: Create new user = `localhost:3001/api/users`
    ```json
    {
        "username": "yourusername",
        "thoughts": ["optional"],
        "friends": ["optional"] 
    }
    ```
* **PUT**: Add Friend - `localhost:3001/api/users/:userId/friend/:friendId`
* **DELETE**: Delete Friend - `localhost:3001/api/users/:userId/friend/:friendId`

`localhost:3001/api/thought`
* GET: `:thoughtId` - Single thought
* POST: Create New Thought
    ```json
    {
        xxxx
    }
    ```
* 

### Screenshot

### Demo

## Questions / Feedback