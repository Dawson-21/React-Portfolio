import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import ToTop from "./Components/ToTop";
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
