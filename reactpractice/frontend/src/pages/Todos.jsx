import { useState, useEffect } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`${process.env.VITE_BACKEND_URL}/todos`);
        const data = await res.json();

        setTodos(data.data);
      } catch (e) {
        console.log(e);
      }
    }

    getData();
  }, []);

  return (
    <div className="m-10 grid grid-cols-4 gap-10">
      {todos.map((v) => (
        <div
          key={v._id}
          className={`p-5 border-2 border-black text-xl text-center ${
            v.isCompleted ? "bg-green-200" : "bg-red-200"
          }`}
        >
          {v.title}
        </div>
      ))}
    </div>
  );
}
