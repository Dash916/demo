require("dotenv").config();
console.log(process.env.PORT);

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

//authentication purpose.. middleware
const auth = (req, res, next) => {
  console.log("authentication successful..");

  next();
};

app.get("/profile", auth, (req, res) => {
  res.send("Profile details");
});

//asynchorouns operations using asynch and await
const getData = async (req, res) => {
  try {
    const users = await Users.find();

    res.json(users);
  } catch (err) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

app.get("/api/users", (req, res) => {
  res.send("User fetched successfully...");
});

app.get("/api/users/:id", (req, res) => {
  console.log(req.params.id);
});

app.get("/users", (req, res) => {
  console.log(req.query.name);
});

app.post("/api/users/new", (req, res) => {
  console.log(req.body);

  res.status(201).json({
    message: "user created successfully...",
  });
});

app.listen(8080, () => {
  console.log("Server is running on the port 8080");
});

//adding feature
