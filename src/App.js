import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from "./pages/login-page/login-page.component";
import HomePage from "./pages/home-page/home-page.components";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
