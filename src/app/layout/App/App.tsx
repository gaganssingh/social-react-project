import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../../../features/auth/login";
import { Signup } from "../../../features/auth/signup";
import { Home } from "../home";
import { Profile } from "../profile";
import { Layout } from "./Layout";
import { ProtectedRoute } from "./ProtectedRoute";

export const App = () => {
  const [user] = useState<boolean>(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute user={!!user}>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
