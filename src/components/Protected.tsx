import { useNavigate } from "react-router-dom";
import { ReactNode, useEffect, useState } from "react";
import { validateToken } from "../api/validateToken";

export default function Protected({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authenticate = async () => {
      const response = await validateToken();
      response && setIsAuthenticated(response);
      if (!isAuthenticated) {
        return navigate("/login");
      }
    };

    authenticate();
  }, []);

  return <>{isAuthenticated ? children : <div>Loading...</div>}</>;
}
