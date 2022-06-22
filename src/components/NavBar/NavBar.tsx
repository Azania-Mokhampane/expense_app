import { Nav } from "./styles";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../store/auth-context";

const NavBar = () => {
  const LogOutCtx = useContext(AuthContext);
  // Todo
  const [welcomeText, setWlecomeText] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWlecomeText(false);
    }, 4000);
  }, []);

  return (
    <Nav>
      <div className="container">
        <div>
          <button
            type="button"
            onClick={() => {
              localStorage.removeItem("isLoggedin");
              localStorage.removeItem("userName");
              // props.LogOut(false);
              LogOutCtx.onLogout();
            }}
          >
            Logout
          </button>
        </div>
        {/* {welcomeText && <div>Azania</div>} */}
        <div style={{ textAlign: "center", color: "white" }}>
          Online Expense Tracker App
        </div>
      </div>

      {welcomeText && LogOutCtx.userName.length ? (
        <div style={{ display: "block", color: "white" }} className="container">
          <div>Hello {LogOutCtx.userName}👋,</div>{" "}
          <div>Welcome to Online Expense Tracker💰</div>
        </div>
      ) : null}
    </Nav>
  );
};

export default NavBar;
