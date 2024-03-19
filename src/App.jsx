import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/contact/Contact";
import HomePage from "./components/homePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);


function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;
