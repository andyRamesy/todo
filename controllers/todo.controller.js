const TodoModel = require("../models/Todos");

module.exports.getAllTodos = async (req, res) => {
	const todos = await TodoModel.find();
	res.json(todos);
};

module.exports.addTodo = async (req, res) => {
	const newTodo = new TodoModel(req.body);
	const savedTodo = await newTodo.save();
	res.json(savedTodo);
};

module.exports.getById = async (req, res) => {
	const response = await TodoModel.findById({ _id: req.params.id });
	res.json(response);
};

module.exports.deleteById = async (req, res) => {
	const responseDelete = await TodoModel.findByIdAndDelete({
		_id: req.params.id
	});
	res.json(responseDelete);
};

module.exports.updateTodo = async (req, res) => {
	const responseUpdate = await TodoModel.updateOne(
		{ _id: req.params.id },
		{ $set: req.body }
	);
	res.json(responseUpdate);
};
