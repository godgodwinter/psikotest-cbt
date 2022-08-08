import LandingLayout from "@/components/templates/landing/LandingLayout";

import Home from "@/components/pages/Index";
import About from "@/components/pages/About";
import adminRoutes from "./adminRoutes";
import otherRoutes from "./otherRoutes";
import Login from "@/components/pages/Login";
const routes = [
  {
    element: <LandingLayout />,
    meta: {
      breadcrumb: () => "Landing Template",
    },
    children: [
      {
        path: "/",
        element: <Home />,
        meta: {
          breadcrumb: () => "Home",
        },
      },
      {
        path: "/about",
        element: <About />,
        meta: {
          breadcrumb: () => "About",
        },
      },
      {
        path: "/login",
        element: <Login />,
        meta: {
          breadcrumb: () => "Login",
        },
      },
    ],
  },
];

routes.push(...adminRoutes, ...otherRoutes);
export default routes;
