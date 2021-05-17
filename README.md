# Eshop

Mini E Commerce web App that I made as my first MERN stack project.

## Demo

[Eshop](https://online-shop22.herokuapp.com/)

##  Technologies Used

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Redux](https://redux.js.org/) - State managment
* [React Bootstrap](https://redux.js.org/)  - UI
* [Node](https://nodejs.org/en/) - Used for backend
* [Express](https://nodejs.org/en/) - Used for backend
* [JWT](https://nodejs.org/en/) - Used for Authentication
* [Mongodb](https://www.mongodb.com/) - Database


## Installation

### Clone

- Clone this repo to your local machine using `https://github.com/codebudy5247/Eshop`

### Setup

> Install npm dependencies using npm install

```shell
$ npm install && cd frontend && npm install
```

> Set up a MongoDB database either locally or provision a free database with <a href='https://www.mongodb.com/cloud/atlas'>`MongoDB Atlas`</a>

> Create a .env file in the root directory

> Set up required environment variables

```javascript
PORT = 
MONGO_URI = 
MONGO_URI_DEV= // mongodb://localhost:27017/ecommerce-api
JWT_SECRET =  // xyz
NODE_ENV =  
PAYPAL_CLIENT_ID = // Client id for Paypal
PAYPAL_CLIENT_SECRET = // Paypal API secret
```

> In the root directory run both the backend and the front end with the following command

```shell
$ npm run dev
```

The app should launch automatically 😄

---
