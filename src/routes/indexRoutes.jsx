import LandingLayout from "@/components/templates/landing/LandingLayout";

import Home from "@/components/pages/Index";
import About from "@/components/pages/About";
import adminRoutes from "./adminRoutes";
import otherRoutes from "./otherRoutes";
import Login from "@/components/pages/Login";
// import LandingIndex from "@/components/pages/LandingIndex";
import { Navigate } from "@tanstack/react-location";
const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
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
