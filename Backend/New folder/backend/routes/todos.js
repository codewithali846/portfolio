import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getTodos,
  todoDetails,
  updateTodo,
} from "../controllers/todos.js";

const router = Router();

router.post("/create", createTodo);

router.get("/get", getTodos);

router.get("/get/:id", todoDetails);

router.delete("/delete/:id", deleteTodo);

router.put("/update/:id", updateTodo);

export default router;
