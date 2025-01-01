import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import OrderPage from "../pages/OrderPage/OrderPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/",
        element: <OrderPage />,
      },
      {
        path: "/order/:category",
        element: <OrderPage />,
      },
    ],
  },
]);
