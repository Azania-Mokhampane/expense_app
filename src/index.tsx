import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { AuthContextprovider } from "./store/auth-context";
//we use React Dom to fetch our html tags
ReactDOM.render(
  <AuthContextprovider>
    <App />
  </AuthContextprovider>,
  document.getElementById("root")
);
// and the above code is how call it, the render method taking two parameters that actually linkes the html page with the <App /> component which is our main componet where all the components are linked to
