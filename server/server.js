const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const database = require("./database/db");
const userRoute = require("./routes/user.routes");

mongoose.Promise = global.Promise;

mongoose.connect(database.db, {useNewUrlParser: true})
.then(()=> {
    return console.log("database connected succesfully")
}, error => {
    return console.log("Database could not be conected" + error)
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use("/users", userRoute);

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log("connected to Port" + port)
});

app.use((req, res, next) => {
    next (createError(404));
});

app.use((req, res, next, error) => {
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});