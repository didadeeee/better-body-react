import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/Homepage";
import Menopause from "../pages/Menopause";
import ErrorPage from "../components/ErrorPage";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "menopause", element: <Menopause /> },
      { path: "test", element: <ErrorPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
