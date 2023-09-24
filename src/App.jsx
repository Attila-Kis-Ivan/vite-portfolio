import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Routes/About/about";
import Home from "./Routes/Home/home";
import Projects from "./Routes/Projects/projrcts";
import Contact from "./Routes/Contact/contact";
import Navbar from "./Components/Navbar/navbar.item";
import Error_Page from "./Routes/Error_Page/errorPage";
import Resume from "./Routes/Resume/resume";
import FooterBar from "./Components/Footer/FooterBar";
import GlobalStyle from "../globalstyle";

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
    errorElement: <Error_Page />,
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
  return <RouterProvider router={router} />;
};

export default App;
