import { createBrowserRouter } from "../node_modules/react-router-dom/dist/index";
import { Bag } from "./pages/bag";
import { Payment } from "./pages/payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Bag />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
]);