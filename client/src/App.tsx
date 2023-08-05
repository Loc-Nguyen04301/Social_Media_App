import React, { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouteProps,
} from "react-router-dom";
import NotFound from "./pages/notFound";
import Alert from "./components/alert/Alert";
import { AuthContext } from "./contexts/AuthContext";
import { ERROR, LOADING, REFRESH_TOKEN } from "./reducers/type";
import { getAPI } from "./utils/FetchData";
import { AlertContext } from "./contexts/AlertContext";
import { publicRoutes } from "./routes";

const Login = lazy(() => import("./pages/login/index"));
const Register = lazy(() => import("./pages/register/index"));

function App() {
  const { dispatch: dispatchAuth } = React.useContext(AuthContext);
  const { dispatch: dispatchAlert } = React.useContext(AlertContext);

  useEffect(() => {
    const logged = localStorage.getItem("logged");
    if (logged !== "true") return;

    const refreshToken = async () => {
      dispatchAlert({ type: LOADING, payload: { loading: true } });
      const res = await getAPI("auth/refreshtoken");
      dispatchAuth({
        type: REFRESH_TOKEN,
        payload: { access_token: res.data.access_token, user: res.data.user },
      });
      dispatchAlert({ type: LOADING, payload: { loading: false } });
    };

    try {
      refreshToken();
    } catch (error: any) {
      dispatchAlert({
        type: ERROR,
        payload: { errors: error.response.data.message },
      });
    }
  }, [dispatchAuth, dispatchAlert]);

  return (
    <Router>
      <Alert />
      <Suspense fallback={<div>Loading...</div>} />
      <Routes>
        {publicRoutes.map((route) => {
          const Layout = route.layout;
          const View = route.component;
          return (
            <Route
              path={route.path}
              key={route.path}
              element={
                <Layout>
                  <View />
                </Layout>
              }
            />
          );
        })}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

// Custom Route component that accepts the LazyRouteProps interface

export default App;
