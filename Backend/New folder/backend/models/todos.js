import mongoose from "mongoose";

const todosSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      //   unique: true
    },
    description: {
      type: String,
    },
    deadline: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Todos = mongoose.models.Todos || mongoose.model("Todos", todosSchema);

export default Todos;
