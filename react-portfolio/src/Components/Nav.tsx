import Button from "./Button";
import { Link } from "react-router-dom";

function Nav(props: {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const top = () => {
    window.scrollTo({
      top: 0,
    });
  };

  let mobileMenu;

  if (props.showMenu) {
    mobileMenu = (
      <div className="fixed top-[90px] right-0 sm:w-[188px] w-[183px] h-auto bg-light/70 dark:bg-dark/80 border-2 border-r-0 rounded-l-xl border-bright-orange/40 fade-left-fast md:hidden">
        <ul className="flex-col space-y-4 pl-6 py-5">
          <li onClick={() => props.setShowMenu(false)}>
            <Link to="/">
              <Button> Home </Button>
            </Link>
          </li>
          <li onClick={() => props.setShowMenu(false)}>
            <Link to="/about">
              <Button> About </Button>
            </Link>
          </li>
          <li onClick={() => props.setShowMenu(false)}>
            <Link to="/portfolio">
              <Button> Portfolio </Button>
            </Link>
          </li>
          <li onClick={() => props.setShowMenu(false)}>
            <Link to="/contact">
              <Button> Contact </Button>
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <>
      <nav className="font-myFont backdrop-blur-sm bg-light/80 dark:bg-dark/80 fixed w-full z-20 top-0 start-0 border-b border-bright-orange/40">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto py-2 lg:px-[6%] md:px-[4%] px-[3%]">
          <Link to="/" onClick={top}>
            <div
              className="transform hover:scale-[1.15] transition duration-200 ease-in-out flex items-center rtl:space-x-reverse"
              onClick={() => props.setShowMenu(false)}
            >
              <img
                src="My-Logo1.png"
                className="h-16"
                alt="Dawson Adams Logo"
              ></img>
            </div>
          </Link>

          <div className="flex md:order-2 rtl:space-x-reverse">
            <Link to="/resume" onClick={() => props.setShowMenu(false)}>
              <Button> Resum&#232; </Button>
            </Link>

            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 mt-0.5 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-light dark:text-light dark:hover:bg-gray-800 dark:focus:ring-gray-600"
              onClick={() => props.setShowMenu(!props.showMenu)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            {mobileMenu}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 lg:pl-7"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg font-extrabold md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link to="/">
                  <Button> Home </Button>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <Button> About </Button>
                </Link>
              </li>
              <li>
                <Link to="/portfolio">
                  <Button> Portfolio </Button>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <Button> Contact </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
