const mongoose = require("mongoose");

mongoose
	.connect(
		// "mongodb+srv://" +
		// 	process.env.DB_USER_PASS +
		// 	"@cluster0.qze2buq.mongodb.net/mevn",
		"mongodb://localhost:27017/mevn",
		{
			useNewUrlParser: true
		}
	)
	.then(() => console.log("Connected to mongoDB atlas"))
	.catch((err) => console.log("failed to connect to mongoDB", err));
