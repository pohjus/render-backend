const { Client } = require("pg");
const client = new Client();

const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  client.query("SELECT * FROM customers").then((response) => {
    res.send(response);
  });
  res.send("It is working what dssdsd!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  client.connect().then(() => {
    console.log("connected to database");
  });
});
