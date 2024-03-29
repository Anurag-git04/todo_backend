
const express = require("express")
const router = express.Router();

//import controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo,getTodoById} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");

//define API routes
router.post("/createTodo", createTodo);
router.get("/getTodo",getTodo)
router.get("/getTodo/:id",getTodoById)
router.put("/updateRodo/:id",updateTodo)

module.exports = router;