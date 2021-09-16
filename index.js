const express = require("express");
const User = require("./models").user;
const app = express();
const PORT = 4001;

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
