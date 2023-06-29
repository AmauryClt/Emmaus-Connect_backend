require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.APP_PORT ?? 5000;

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
}; 

app.get("/", welcome);

const phoneHandlers = require("./phoneHandlers");

app.get("/api/phone", phoneHandlers.getPhones);
app.get("/api/phone/:id", phoneHandlers.getPhoneById);
app.post("/api/phone", phoneHandlers.postPhone);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
