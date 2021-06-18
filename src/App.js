import "./App.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";
import Home from "./containers/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signin">
            <SignIn></SignIn>
          </Route>
          <Route exact path="/signup">
            <SignUp></SignUp>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
