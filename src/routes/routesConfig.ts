import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";

const routesConfig = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/user",
    component: UserPage,
  },
  //   {
  //     path: "/user/:id",
  //     component: UserPage,
  //   },
  //   {
  //     path: "*",
  //     component: NotFoundPage,
  //   },
];

export default routesConfig;
