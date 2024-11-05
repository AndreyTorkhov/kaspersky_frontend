import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const routesConfig = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/users/:id",
    component: UserPage,
  },
  {
    path: "*",
    component: NotFoundPage,
  },
];

export default routesConfig;
