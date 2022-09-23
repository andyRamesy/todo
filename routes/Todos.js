const express = require("express");
const router = express.Router();
const Todo = require("../models/Todos");

//get all todo route
router.get("/", async (req, res) => {
	const todos = await Todo.find();
	res.json(todos);
});

//Create new todo
router.post("/new", async (req, res) => {
	const newTodo = new Todo(
		req.body  //what the vue app is sending
		// {
		// 	author: "Flanders",
		// 	todo: "Go to canada"
		// }
	);
	const savedTodo = await newTodo.save();
	res.json(savedTodo);
});

//getter by id
router.get("/get/:id", async (req, res) => {
	const response = await Todo.findById({
		_id: req.params.id
	});
	res.json(response);
});

//Delete by id
router.delete("/delete/:id", async (req, res) => {
	const responseDelete = await Todo.findByIdAndDelete({ _id: req.params.id });
	res.json(responseDelete);
});

//update by id
router.put("/update/:id", async (req, res) => {
	// {_id : req.params.id}  //{$set:req.body}
	const responseUpdate = await Todo.updateOne(
		// {
		// author: "zzzzzzzzzzz",
		// todo: "xxxxxxxxxxx"
		// }
		{ $set: req.body }
	);
	res.json(responseUpdate);
});
module.exports = router;
