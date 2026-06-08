import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import HomeNavigation from "../components/layout/HomeNavigation";

export default function Layout() {
  const mainRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();

  // Move focus to main content on every route change so keyboard/screen-reader
  // users don't have to navigate past the entire nav again.
  useEffect(() => {
    mainRef.current?.focus();
  }, [pathname]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <HomeNavigation />
      <main
        id="main-content"
        ref={mainRef}
        // tabIndex={-1} makes it programmatically focusable without
        // adding it to the keyboard tab order.
        tabIndex={-1}
        style={{ outline: "none" }}
      >
        <Outlet />
      </main>
    </>
  );
}
