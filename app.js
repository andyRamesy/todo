const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });
require("./config/db.js");

//create app
const app = express();
const corsOptions = {
	// origin: "http://localhost:8080",
	origin:process.env.LOCAL_URL,
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

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
