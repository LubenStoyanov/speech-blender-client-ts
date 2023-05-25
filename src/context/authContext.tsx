import { ReactNode, createContext, useState } from "react";

type UserI = {
  username: string;
};

type AuthContextI = {
  user: UserI | null;
  setUser: React.Dispatch<React.SetStateAction<UserI | null>>;
};

export const AuthContext = createContext<AuthContextI | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserI | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
