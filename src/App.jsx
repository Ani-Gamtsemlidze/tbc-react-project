import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import HomePage from "./pages/homePage/HomePage";
import RootLayout from "./components/layout/RootLayout";
import Profile from "./pages/profile/Profile";
import Blog from "./pages/blog/Blog";

const router = createBrowserRouter([
  {path:"/",
  element: <RootLayout />,

  children:
[  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "profile",
    element: <Profile />
  },
  {
    path: "blog",
    element: <Blog />
  },
  {
    path: "contact",
    element: <Contact />,
  },]
}
]);


function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;
