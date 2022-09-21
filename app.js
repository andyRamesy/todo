const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./config/.env" });
require("./config/db.js");

//create app
const app = express();

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Methods",
		"GET,HEAD,OPTIONS,POST,PUT,DELETE"
	);
	res.header(
		"Access-Control-Allow-Headers",
		"auth-token,Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.get("/", (res, req) => {
	res.send("home page");
});

// const TodosRoute = require("./routes/Todo");
// app.use("/todos", TodosRoute);

//start server
app.listen(3000, () => {
	console.log("listening on port 3000");
});
