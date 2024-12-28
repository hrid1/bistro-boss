import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <h2>HOme</h2>,
      },
    ],
  },
]);
