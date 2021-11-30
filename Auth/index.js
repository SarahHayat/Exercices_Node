import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoutes from "./routes/user.route";
const { urlencoded, json } = bodyParser;
const { connect, connection } = mongoose;

// app.use(cookies.express({ keys: [process.env.COOKIE_KEY] }));

const app = express();
const port = process.env.PORT || 8000;

app.use(urlencoded({ extended: false }));
app.use(json());

//Routage
app.use(userRoutes);
//Set up default mongoose connection
var mongoDB =
  "mongodb+srv://sarah:password_user@cluster0.oofm1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
var db = connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
// Utiliser les routes

app.listen(port, () => {
  console.log("Server app listening on port " + port);
});
