import { ReactNode, createContext, useState, useEffect } from "react";

type AuthContextI = {
  isAuthenticated: boolean;
  loginContext: () => void;
  logoutContext: () => void;
};

export const AuthContext = createContext<AuthContextI | null>(null);

// const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [token, setToken] = useState<string | null>(null);

//   const updateToken = (newToken: string | null) => {
//     setToken(newToken);
//   };

//   return (
//     <AuthContext.Provider value={{ token, updateToken }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

import Cookies from "universal-cookie";

const cookies = new Cookies();

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authToken = cookies.get("authToken");

    if (authToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const loginContext = () => {
    setIsAuthenticated(true);
  };

  const logoutContext = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loginContext, logoutContext }}
    >
      {children}
    </AuthContext.Provider>
  );
};
