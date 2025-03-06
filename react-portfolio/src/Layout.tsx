import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ToTop from "./components/ToTop";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function Layout() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Nav showMenu={showMenu} setShowMenu={setShowMenu} />

      <main onClick={() => setShowMenu(false)}>
        <Outlet />
      </main>

      <div onClick={() => setShowMenu(false)}>
        <ToTop />
        <Footer />
      </div>
    </>
  );
}
