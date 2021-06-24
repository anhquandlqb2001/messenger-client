import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./helpers/PrivateRoute";
import LandingPage from "./pages/LandingPage";
import Message from "./pages/Message";

function App() {
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
