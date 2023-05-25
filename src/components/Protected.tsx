import { Navigate } from "react-router-dom";
import { ReactNode, useEffect, useState } from "react";
import { validateToken } from "../api/validateToken";

export default function Protected({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    let ignore = false;

    const authenticate = async () => {
      if (!ignore) {
        const response = await validateToken();
        response && setIsAuthenticated(response);
        setIsloading(false);
      }
    };

    authenticate();

    return () => {
      ignore = true;
    };
  }, []);

  if (isLoading) return null;

  return <>{isAuthenticated ? children : <Navigate to="/login" replace />}</>;
}
