const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });
require("./config/db.js");

//create app
const app = express();
const corsOptions = {
	origin: ["http://192.168.2.183:8080", "http://localhost:8080"],
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
// app.use(function (req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header(
// 		"Access-Control-Allow-Methods",
// 		"GET,HEAD,OPTIONS,POST,PUT,DELETE"
// 	);
// 	res.header(
// 		"Access-Control-Allow-Headers",
// 		"auth-token,Origin, X-Requested-With, Content-Type, Accept"
// 	);
// 	next();
// });

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.get("/", (res, req) => {
	res.send("home page");
});

const TodosRoute = require("./routes/Todos");
app.use("/todos", TodosRoute);

//start server
app.listen(3000, () => {
	console.log("listening on port 3000");
});
