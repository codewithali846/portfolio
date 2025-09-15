import { useState } from "react";
import MyContext from "./MyContext/MyContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Todos from "./pages/Todos";
import AddTodos from "./pages/AddTodos";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./pages/ProtectedRoute";

const btnStyle = "px-5 py-2 active:scale-90 duration-300 text-white text-lg";

function App() {
  const [names, setName] = useState(["Ahmad", "Usman", "Shahzaib", "Usama"]);
  const [inp, setInp] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const [count, setCount] = useState(0);
  // const [color, setColor] = useState("gray");
  // const [showHide, setShowHide] = useState(true);

  // function plus() {
  //   if (count >= 10) {
  //     return;
  //   }
  //   setCount(count + 1);
  // }

  // function reset() {
  //   setCount(0);
  // }

  // function minus() {
  //   if (count > -10) {
  //     setCount(count - 1);
  //   }
  // }

  return (
    <MyContext.Provider
      value={{
        names,
        setName,
        inp,
        setInp,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todos" element={<Todos />} />
          <Route
            path="/todos/add"
            element={<ProtectedRoute children={<AddTodos />} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Toaster />
      </BrowserRouter>

      {/* <h1 className="text-center text-3xl font-bold">React JS</h1>

      <div className="text-center">
        <input
          className="w-[300px] px-4 py-2 border-2 border-gray-500 mt-10 text-lg"
          type="text"
          placeholder="Enter Name Here..."
        />
      </div>

      <div className="text-center text-3xl">{inp}</div>

      <div className="grid grid-cols-3 gap-7 m-10">
        {names.map((v) => (
          <div className="text-3xl text-center p-5 bg-amber-200">{v}</div>
        ))}
      </div> */}

      {/* <h1
        className={`text-5xl text-center mt-10 font-bold 
        ${
          count > 0
            ? "text-green-500"
            : count == 0
            ? "text-black"
            : "text-red-500"
        }`}
      >
        {count}
      </h1>

      <div className="flex items-center justify-center gap-7 my-10">
        <button
          onClick={minus}
          className={btnStyle + " bg-red-800 hover:bg-red-950 active:bg-black"}
        >
          Minus
        </button>
        <button
          onClick={() => {
            reset();
          }}
          className={
            btnStyle + " bg-gray-800 hover:bg-gray-950 active:bg-black"
          }
        >
          Reset
        </button>
        <button
          onClick={plus}
          className={
            btnStyle + " bg-green-800 hover:bg-green-950 active:bg-black"
          }
        >
          Plus
        </button>
      </div> */}

      {/* <div className="flex items-center justify-center gap-7 my-10">
        <button
          className={btnStyle + " bg-black"}
          onClick={() => {
            setShowHide(!showHide);
          }}
        >
          {showHide ? "Hide" : "Show"}
        </button>
      </div>

      <div className="flex items-center justify-center gap-7 my-10">
        <button
          className={btnStyle + " bg-red-500"}
          onClick={() => {
            setColor("red");
          }}
        >
          Red
        </button>
        <button
          className={btnStyle + " bg-blue-500"}
          onClick={() => {
            setColor("blue");
          }}
        >
          Blue
        </button>
        <button
          className={btnStyle + " bg-green-500"}
          onClick={() => {
            setColor("green");
          }}
        >
          Green
        </button>
        <button
          className={btnStyle + " bg-purple-500"}
          onClick={() => {
            setColor("purple");
          }}
        >
          Purple
        </button>
        <button
          className={btnStyle + " bg-amber-500"}
          onClick={() => {
            setColor("yellow");
          }}
        >
          Yellow
        </button>
      </div> */}

      {/* {showHide && (
        <div
          className="w-[70%] h-[250px] rounded-xl mx-auto"
          style={{
            background: color,
          }}
        ></div>
      )} */}
    </MyContext.Provider>
  );
}

export default App;
