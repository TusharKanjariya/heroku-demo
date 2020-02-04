const express = require("express");
const app = express();
const fetch = require("node-fetch");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/data", (req, res) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(json => res.json(json));
});

app.listen(process.env.PORT || 3000);
