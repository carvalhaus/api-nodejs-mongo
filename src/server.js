const express = require("express");
const AuthController = require("./controllers/AuthController");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/auth", AuthController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
