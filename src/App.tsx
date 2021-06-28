import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./helpers/PrivateRoute";
import LandingPage from "./pages/LandingPage";
import Message from "./pages/Message";
import axios from "axios";
import useLocalStorage from "./helpers/useLocalStorage";
import { useEffect } from "react";
function App() {
  const [token, setToken] = useLocalStorage("token");
  axios.defaults.baseURL = "http://localhost:5000";
  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }, [token]);

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        setToken(null);
      }
    }
  );

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute exact path="/m" component={Message} />
        <Route path="*" component={() => <h1>404 Not found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
