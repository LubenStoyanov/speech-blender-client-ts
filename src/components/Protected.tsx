import { Navigate, useParams, useLocation } from "react-router-dom";
import { ReactNode, useEffect, useState } from "react";
import { validateToken } from "../api/auth/validateToken";

export default function Protected({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsloading] = useState(true);
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    let ignore = false;

    const authenticate = async () => {
      if (!ignore) {
        const valid = await validateToken();
        setIsAuthenticated(valid);
        setIsloading(false);
      }
    };

    authenticate();

    return () => {
      ignore = true;
    };
  }, [params, location]);

  if (isLoading) return null;

  return <>{isAuthenticated ? children : <Navigate to="/login" replace />}</>;
}
