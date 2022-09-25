const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.controller");

//todos router
router.get("/", todoController.getAllTodos);
router.post("/new", todoController.addTodo);
router.get("/get/:id", todoController.getById);
router.delete("/delete/:id", todoController.deleteById);
router.put("/update/:id", todoController.updateTodo);


module.exports = router;
