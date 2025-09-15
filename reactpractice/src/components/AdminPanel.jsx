import { useState, useEffect } from "react";
import axios from "axios";
import AdminFeatures from "./AdminFeatures";
import AdminPricing from "./AdminPricing";
import AdminContant from "./AdminContant";

export default function AdminPanel() {
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [message, setMessage] = useState("");

  // Check auth on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("http://localhost:3000/api/auth/admin-check", {
          withCredentials: true,
        });
        setAuthorized(true);
      } catch (err) {
        setAuthorized(false);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  // Handle login/register
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isRegister
        ? "http://localhost:3000/api/auth/register"
        : "http://localhost:3000/api/auth/login";

      const res = await axios.post(
        url,
        { email, password, role: "admin" },
        { withCredentials: true }
      );

      setMessage(res.data.message);
      if (!isRegister) setAuthorized(true);
      setEmail("");
      setPassword("");
    } catch (err) {
      setMessage(err.response?.data?.error || "Error occurred");
    }
  };

  // Logout
  const handleLogout = async () => {
    await axios.post("http://localhost:3000/api/auth/logout", {}, { withCredentials: true });
    setAuthorized(false);
    setEmail("");
    setPassword("");
  };

  if (loading) return <div className="text-center mt-20">Checking auth...</div>;

  // Login/Register form
  if (!authorized) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {isRegister ? "Register Admin" : "Admin Login"}
          </h2>

          {/* Hidden fields to prevent browser autofill */}
          <input type="text" name="fakeusernameremembered" style={{ display: "none" }} />
          <input type="password" name="fakepasswordremembered" style={{ display: "none" }} />

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 focus:outline-none"
              required
              autoComplete="off"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 focus:outline-none"
              required
              autoComplete="new-password"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg"
            >
              {isRegister ? "Register" : "Login"}
            </button>
          </form>

          <p className="text-center mt-4">
            {isRegister ? "Already have an account?" : "Don't have an admin yet?"}{" "}
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="text-blue-400 underline"
            >
              {isRegister ? "Login" : "Register"}
            </button>
          </p>
          {message && <p className="text-center mt-4 text-red-400">{message}</p>}
        </div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gray-900 text-white py-24 px-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Admin Panel</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AdminFeatures />
        <AdminPricing />
        <AdminContant />
      </div>
    </div>
  );
}
