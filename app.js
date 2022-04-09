const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  let string = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  response.send(string);
});

app.listen(3002);
module.exports = app;
