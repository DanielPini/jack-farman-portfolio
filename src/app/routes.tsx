import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Work from "../pages/Work";
import ProjectPage from "../pages/ProjectPage";
import WorkRedirect from "../pages/WorkRedirect";
import Contact from "../pages/Contact";
import Consulting from "../pages/Consulting";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/film-practice", element: <Work /> },
  { path: "/film-practice/:slug", element: <ProjectPage /> },
  { path: "/work", element: <Navigate to="/film-practice" replace /> },
  { path: "/work/:slug", element: <WorkRedirect /> },
  { path: "/consulting", element: <Consulting /> },
  { path: "/contact", element: <Contact /> },
]);
