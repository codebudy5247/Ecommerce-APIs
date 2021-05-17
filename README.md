# Eshop

> E Commerce web App  built with the MERN stack.

## Demo

[Eshop](https://online-shop22.herokuapp.com/)

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

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
### Seed Database

> You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
> In the root directory run both the backend and the front end with the following command

```shell
$ npm run dev

# Run backend only
npm run server
```

The app should launch automatically 😄

---

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```


```
