# My Node API

This is a RESTful API built with Node.js and Express, written in TypeScript and using MongoDB as the database. It provides a complete CRUD for both user and object entities, with generic modules for easy refactoring to other projects.

## Features

    Full CRUD for user and object entities
    Login system with JWT access token and refresh token
    Fast, stable and scalable
    Written in TypeScript
    Generic modules for easy refactoring
    MongoDB database

### User Routes

    POST /user/create: Creates a new user
    PUT /user/update/:id: Updates an existing user
    DELETE /user/delete/:id: Deletes an existing user
    GET /user/show/:id: Shows an existing user
    GET /user/showall: Shows all existing users

### Object Routes

    POST /object/create: Creates a new object
    PUT /object/update/:id: Updates an existing object
    DELETE /object/delete/:id: Deletes an existing object
    GET /object/show/:id: Shows an existing object
    GET /object/showall: Shows all existing objects

### Authentication Routes

    POST /auth/login: Logs in a user and returns an access token and a refresh token
    POST /auth/token: Returns a new access token and a new refresh token, if the provided refresh token is valid

### Installation

    Clone this repository
    Install dependencies using yarn
    Start the server using yarn dev

### Environment Variables

    PORT: Application port
    SECRET_ACCESS: JWT Secret for access token
    SECRET_REFRESH: JWT Secret for refresh token
    DATABASE_URL: The database URL

### License

This project is licensed under the MIT License - see the LICENSE file for details.
