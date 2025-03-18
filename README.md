# MERN Stack Template

<img src='https://raw.githubusercontent.com/BenElferink/mern-template/refs/heads/images/images/mern.jpeg' />

- **M** = [MongoDB](https://www.mongodb.com)
- **E** = [Express.js](https://expressjs.com)
- **R** = [React.js](https://reactjs.org)
- **N** = [Node.js](https://nodejs.org)

<br />

# What is this project?

A classic TODO application to enhance my beginner level programming skills. it has a server setup with some basic authentication,
and a client side that communicate with the backend which also communicate with the mongodb database.

<br />

# How to clone this project

### 1. Clone this repository:

```
git clone https://github.com/JakeNLelis/TodoApp.git
```

### 2. Install dependencies:

Go to the `server` folder, and run `install`.

```
cd ./server
npm i
```

Go to the `client` folder, and run `install`.

```
cd ./client
npm i
```

### 3. Prepare MongoDB:

Prepare your MongoDB database (using [Atlas](https://www.mongodb.com/cloud/atlas),
or [Community](<https://github.com/benelferink/mern-template/wiki/Install-MongoDB-Community-Server-(MacOS)>)). Then configure your database within `server/src/constants/index.js` (or `server/src/.env`), by configuring the `MONGO_URI` variable.

### 4. Start applications:

Go to the `server` folder, and run `dev`.

```
cd ./server
npm run dev
```

Go to the `client` folder, and run `dev`.

```
cd ./client
npm run dev
```

### 5. Happy Coding !!!
