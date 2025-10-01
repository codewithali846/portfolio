import { useState } from "react";

export default function AddTodos() {
  const [inpData, setInpData] = useState({
    title: "",
    description: "",
    deadline: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.VITE_BACKEND_URL}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inpData),
      });
      if (res.ok) {
        alert("data submitted");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1 className="text-3xl text-center font-bold">Add Todo</h1>

      <form
        className="flex flex-col gap-5 m-10 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          value={inpData.title}
          onChange={handleChange}
          className="border-2 border-gray-700 px-4 py-2 w-[350px]"
          placeholder="Title"
        />
        <textarea
          className="border-2 border-gray-700 px-4 py-2 w-[350px]"
          name="description"
          placeholder="Description"
          value={inpData.description}
          onChange={handleChange}
          cols={3}
        ></textarea>
        <input
          name="deadline"
          value={inpData.deadline}
          onChange={handleChange}
          className="border-2 border-gray-700 px-4 py-2 w-[350px]"
          type="date"
        />

        <button className="bg-blue-700 text-white px-5 py-2 w-[350px] active:scale-90 duration-300 hover:bg-blue-900">
          Add Todo
        </button>
      </form>
    </div>
  );
}
