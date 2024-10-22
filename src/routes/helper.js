import Login from "pages/auth/login";
import Signup from "pages/auth/signup";

export const authRoutes = [
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/signup",
    component: <Signup />,
  },
];
