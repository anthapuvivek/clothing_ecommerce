import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext"; // ✅ must match

export default function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <h1>Please Login</h1>;
  }

  return children;
}