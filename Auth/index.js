var express = require("express");
var mongoose = require("mongoose");
const bodyParser = require("body-parser");
// app.use(cookies.express({ keys: [process.env.COOKIE_KEY] }));

var app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Set up default mongoose connection
var mongoDB = "mongodb://127.0.0.1:27017/user";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
require("./routes/routes");

app.listen(port, () => {
  console.log("Server app listening on port " + port);
});
