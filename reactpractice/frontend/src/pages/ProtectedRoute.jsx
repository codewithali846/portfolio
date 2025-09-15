import { useContext, useEffect } from "react";
import MyContext from "../MyContext/MyContext";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/login");
    }
  }, [isAuthenticated]);

  return <div>{children}</div>;
}
