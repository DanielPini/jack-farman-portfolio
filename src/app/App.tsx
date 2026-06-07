import { RouterProvider } from "react-router-dom";
import { router } from "../app/routes";
import { LanguageProvider } from "../context/LanguageContext";
import "./App.css";

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}
