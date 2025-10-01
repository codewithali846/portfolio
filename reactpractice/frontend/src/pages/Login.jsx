import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Ring } from "ldrs/react";
import "ldrs/react/Ring.css";
import MyContext from "../MyContext/MyContext";

export default function Login() {
  const [inpData, setInpData] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(MyContext);

  function handleChange(e) {
    const { name, value } = e.target;

    setInpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!inpData.email) {
      toast.error("Email is required");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(inpData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!inpData.password) {
      toast.error("Password is required");
      return;
    }

    if (inpData.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch(`${process.env.VITE_BACKEND_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inpData),
      });
      const resJson = await res.json();

      if (resJson.status) {
        setIsAuthenticated(true);
        toast.success("Logged in successfully");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error(resJson?.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <h1 className="text-3xl text-center font-bold">Login</h1>

      <form
        className="flex flex-col gap-5 m-10 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          value={inpData.email}
          onChange={handleChange}
          className="border-2 border-gray-700 px-4 py-2 w-[350px]"
          placeholder="Email"
        />

        <input
          type="password"
          name="password"
          value={inpData.password}
          onChange={handleChange}
          className="border-2 border-gray-700 px-4 py-2 w-[350px]"
          placeholder="Password"
        />

        <button
          className="bg-blue-700 disabled:bg-gray-700 text-white px-5 py-2 w-[350px] active:scale-90 duration-300 hover:bg-blue-900 flex items-center justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Ring size="25" stroke="5" bgOpacity="0" speed="2" color="black" />
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
}
