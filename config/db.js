const mongoose = require("mongoose");

mongoose
	.connect(
		process.env.DB,
		{
			useNewUrlParser: true
		}
	)
	.then(() => console.log("Connected to mongoDB atlas"))
	.catch((err) => console.log("failed to connect to mongoDB", err));
