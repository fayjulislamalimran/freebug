import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home.js";

import Main from "../Layout/Main.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
export default router;
