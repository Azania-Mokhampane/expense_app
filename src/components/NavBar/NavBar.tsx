import { Nav } from "./styles";
const NavBar = (props: any) => {
  return (
    <Nav>
      <div className="container">
        <div>
          <button
            type="button"
            onClick={() => {
              localStorage.removeItem("isLoggedin");
              props.LogOut(false);
            }}
          >
            Logout
          </button>
        </div>
        <div style={{ textAlign: "center", color: "white" }}>
          Online Expense Tracker App
        </div>
      </div>
    </Nav>
  );
};

export default NavBar;
