import React, { createContext, ReactNode, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  onLogin: () => {},
  onLogout: () => {},
});

type props = {
  children: ReactNode;
};

export const AuthContextprovider = (props: props) => {
  const [isLoggedIn, setIsLoggenIn] = useState(false);

  const LoginHandler = () => {
    setIsLoggenIn(true);
  };

  const LogoutHandler = () => {
    setIsLoggenIn(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: LoginHandler,
        onLogout: LogoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
