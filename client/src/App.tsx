import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Alert from "./components/alert/Alert";

const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <Router>
      <Alert />
      <Suspense fallback={<div>Loading...</div>} />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
