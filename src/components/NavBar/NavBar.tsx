import { Nav } from "./styles";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const NavBar = () => {
  const LogOutCtx = useContext(AuthContext);
  // Todo
  // const [welcomeText, setWlecomeText] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setWlecomeText(false);
  //   }, 5000);
  // }, []);

  return (
    <Nav>
      <div className="container">
        <div>
          <button
            type="button"
            onClick={() => {
              localStorage.removeItem("isLoggedin");
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

      {/* {welcomeText && <div>Azania</div>} */}
    </Nav>
  );
};

export default NavBar;
