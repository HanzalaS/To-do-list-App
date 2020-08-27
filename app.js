const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
var items = [];

app.get("/", function (req, res) {
  var today = new Date();

  var option = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", option);

  res.render("list", { kindOfDay: day, newListItem: items });
});
app.post("/", (req, res) => {
  const newItem = req.body.newItem;
  items.push(newItem);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
