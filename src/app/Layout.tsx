import { Outlet } from "react-router-dom";
import HomeNavigation from "../components/layout/HomeNavigation";

export default function Layout() {
  return (
    <>
      <HomeNavigation />
      <Outlet />
    </>
  );
}
