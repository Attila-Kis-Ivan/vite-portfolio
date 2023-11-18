import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import About from "./Routes/About/about";
import Home from "./Routes/Home/home";
import Projects from "./Routes/Projects/projrcts";
import Contact from "./Routes/Contact/contact";
import Navbar from "./Components/Navbar/navbar.item";
import ErrorPAGE from "./Routes/ErrorPage/errorPage";
import Resume from "./Routes/Resume/resume";
import FooterBar from "./Components/Footer/FooterBar";
import GlobalStyle from "../globalstyle";

import ReactGA from "react-ga";
const TRACKING_ID = import.meta.env.VITE_PUBLIC_GOOGLE_ANALYTICS;
ReactGA.initialize(TRACKING_ID);

const AppLayout = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Outlet />
      <FooterBar />
    </>
  );
};
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPAGE />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return <RouterProvider router={router} />;
};

export default App;
