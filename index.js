const express = require("express");
const app = express();
const path = require("path");
const mongoose_connection = require("./config/mongoose");
const expressSession = require("express-session");


// models
// const hishaabModel = require("./models/hishaab"); // format 


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(expressSession({
  secret: "random stuff",
  resave: false,
  saveUninitialized: false
}));


app.get("/", (req, res) => {
    res.render("home");
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
