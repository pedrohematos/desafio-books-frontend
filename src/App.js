import { Router } from "react-router-dom";
import { AuthProvider } from "./contexts/auth";

import Routes from "./routes";
import history from "./routes/history";

function App() {
  return (
    <Router history={history}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Router>
  );
}

export default App;
