const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dataBase = require("./Config/DB");
const session = require("express-session");

const userRoutes = require("./Routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
app.use(
  cors({
    origin:
       "https://my-e-commerce-frontend.onrender.com",
    credentials: true,
  })
);

dataBase.connect();

// Routes
app.use("/auth", userRoutes);


app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
