const express = require("express");
const AuthController = require("./controllers/AuthController");
const AdminController = require("./controllers/AdminController");

const authenticateMiddleware = require("./middlewares/authenticate");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/auth", AuthController);
app.use("/admin", authenticateMiddleware, AdminController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
