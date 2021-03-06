import React, { createContext, ReactNode, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  onLogin: () => {},
  onLogout: () => {},
  userName: "",
  nameHandler: (e: any) => {},
});

type props = {
  children: ReactNode;
};

export const AuthContextprovider = (props: props) => {
  const [isLoggedIn, setIsLoggenIn] = useState(false);

  const [userName, setUserName] = useState("");

  const UserNameHandler = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setUserName(e.target.value);
  };

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
        userName: userName,
        nameHandler: UserNameHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
