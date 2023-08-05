import Home from "../pages/home";
import Profile from "../pages/profile";
import DefaultLayout from "../layout/defaultLayout";

const publicRoutes = [
  { path: "/home", component: Home, layout: DefaultLayout },
  { path: "/profile/:id", component: Profile, layout: DefaultLayout },
];

export { publicRoutes };
