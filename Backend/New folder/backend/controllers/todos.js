import Todos from "../models/todos.js";

const createTodo = async (req, res) => {
  try {
    const { title, description, deadline } = req.body;

    await Todos.create({ title, description, deadline });

    res.status(200).send({ message: "Todo Created" });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "Something went wrong" });
  }
};

const getTodos = async (req, res) => {
  try {
    const todos = await Todos.find();

    res.status(200).send({ data: todos });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "Something went wrong" });
  }
};

const todoDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const todos = await Todos.findById(id);

    res.status(200).send({ data: todos });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "Something went wrong" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    await Todos.findByIdAndDelete(id);

    res.status(200).send({ message: "Todo Deleted" });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "Something went wrong" });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, deadline, isCompleted } = req.body;

    await Todos.findByIdAndUpdate(id, {
      title,
      description,
      deadline,
      isCompleted,
    });

    res.status(200).send({ message: "Todo Updated" });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "Something went wrong" });
  }
};

export { createTodo, getTodos, todoDetails, deleteTodo, updateTodo };
