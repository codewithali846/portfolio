import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../MyContext/MyContext";

export default function Navbar() {
  const { isAuthenticated, setIsAuthenticated } = useContext(MyContext);

  return (
    <div className="bg-gray-200 py-5 flex justify-center gap-10 text-lg font-semibold mb-5">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/todos">Todos</Link>
      <Link to="/todos/add">Add Todos</Link>
      <Link to="/contact">Contact</Link>

      {isAuthenticated ? (
        <>
          <button onClick={() => setIsAuthenticated(false)}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
