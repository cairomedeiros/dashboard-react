import { createContext } from "react";
import type { PropsWithChildren } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  return (
    <AuthContext.Provider value={{ signed: true }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;