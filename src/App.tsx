import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import useLocalStorage from "./helpers/useLocalStorage";
import { BASE_URL } from "./libs/config";
import LandingPage from "./pages/LandingPage";
import Chat from "./pages/Chat";

function App() {
  const [token, setToken] = useLocalStorage("token");
  axios.defaults.baseURL = BASE_URL;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  // axios.interceptors.response.use(
  //   (response) => response,
  //   (error) => {
  //     if (error.response.status === 401) {
  //       setToken(null);
  //     }
  //   }
  // );

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute exact path="/m" component={Chat} />
        <Route path="*" component={() => <h1>404 Not found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
