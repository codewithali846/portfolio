import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Ring } from "ldrs/react";
import "ldrs/react/Ring.css";

export default function Register() {
  const [inpData, setInpData] = useState({
    dp: "",
    fullname: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value, files } = e.target;

    if (name === "dp" && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setInpData((prevData) => ({
          ...prevData,
          dp: reader.result,
        }));
      };

      reader.readAsDataURL(file);
    } else {
      setInpData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!inpData.dp) {
      toast.error("Profile picture is required");
      return;
    }

    if (!inpData.fullname) {
      toast.error("Full name is required");
      return;
    }

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
      const res = await fetch(`${process.env.VITE_BACKEND_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inpData),
      });
      if (res.ok) {
        toast.success("Account Created");
        setIsSubmitting(false);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      setIsSubmitting(false);
      console.log(error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  }

  return (
    <div>
      <h1 className="text-3xl text-center font-bold">Create Account</h1>

      <form
        className="flex flex-col gap-5 m-10 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="w-[350px]">
          <input
            type="file"
            name="dp"
            onChange={handleChange}
            className="border-2 border-gray-700 px-4 py-2 w-full"
          />
          {inpData.dp && (
            <img
              src={inpData.dp}
              alt="Uploaded preview"
              className="mt-2 w-32 h-32 object-cover rounded-full border-2 border-gray-700"
            />
          )}
        </div>

        <input
          type="text"
          name="fullname"
          value={inpData.fullname}
          onChange={handleChange}
          className="border-2 border-gray-700 px-4 py-2 w-[350px]"
          placeholder="Fullname"
        />

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
            "Create Account"
          )}
        </button>
      </form>
    </div>
  );
}
