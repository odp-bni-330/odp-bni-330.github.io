# Beginner API Workshop: Learn with Postman and Real-World Analogies

This guide is designed for beginners. I'll first explain what APIs are, then guide you through a hands-on learning experience using [Postman's "What is an API?"](https://www.postman.com/what-is-an-api/) interactive guide.

---

## 📘 Part 1: What is an API?

### Simple Definition:
**API** = Application Programming Interface

An API is a **messenger** that lets two software programs talk to each other and exchange data.

### Real-World Analogy: The Restaurant 🍽️
- **You** = Customer  
- **Menu** = Front-End (it can be mobile or web app)  
- **Waiter** = API  
- **Kitchen** = The system that processes the data (it includes service, repository and database)

**Flow:**
<img src="./images/diagram-what-is-an-api-postman-illustration.svg" alt="alt text" width="400" height="300">

1. You read the menu (understand what is available)  
2. You give the order to the waiter (send an API request)  
3. Waiter tells the kitchen (server) what to prepare  
4. Kitchen cooks it and gives it back to the waiter  
5. Waiter brings your meal (API response)

You never interact directly with the kitchen — just like users don’t interact directly with the server.

---

## 🛠️ Part 2: What is REST and RESTful API?

**[REST](https://restfulapi.net)** stands for **Representational State Transfer** — a set of rules for designing web services that allow systems to communicate over HTTP. So REST is simply just one of architecture styles for APIs. There are other architecture styles like [GraphQL](https://graphql.org/learn/), [gRPC](https://grpc.io), etc.

A **RESTful API** is an API that follows REST principles. Key characteristics:
- **Stateless**: Each API call must contain all the information the server needs.
- **Uses HTTP methods**: GET, POST, PUT, DELETE.
- **Uses URLs to access resources**.
- **Can return different formats, typically JSON**.
#### Common RESTful actions:
- `GET /users` → Get a list of users
- `GET /users/123` → Get a specific user
- `POST /users` → Create a new user
- `PUT /users/123` → Update a user
- `DELETE /users/123` → Delete a user

## 🧠 Part 3: How a Server Handles RESTful APIs (with JavaScript)

While earlier we used JavaScript on the client side (browser) to *consume* APIs, now let’s see how APIs are *created* on the server.

We’ll use [Express.js](https://expressjs.com/) — a popular web framework for Node.js — to handle common REST methods.

### RESTful API Handler Example (Server-Side)

```javascript
// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory data (mock database)
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

// GET /users - Read all users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET /users/:id - Read one user
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  user ? res.json(user) : res.status(404).send('User not found');
});

// POST /users - Create a new user
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /users/:id - Update a user
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');

  user.name = req.body.name;
  res.json(user);
});

// DELETE /users/:id - Delete a user
app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.status(204).send(); // 204 No Content
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```


## 🔄 Recap & Hands-On Projects

### Recap
- APIs let software communicate.
- You can think of them like waiters in a restaurant.
- They hide complexity and return only what you ask for.

### Hands-On Projects
I already provided a more complex example of a RESTful API using Node.js, and it's included in this repository. The project implemented JWT authentication, CRUD operations, CI/CD by using GitHub Actions, and deployed it to AWS. Furthermore, you can test the API using [Postman](https://www.postman.com/solar-satellite-244046/cisnux/request/wqris37/add-user-with-valid-payload).

---

Happy Coding 👨🏻‍💻!