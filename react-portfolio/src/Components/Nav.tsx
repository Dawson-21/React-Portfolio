import Button from "./Button";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="bg-white dark:bg-gray-950/95 fixed w-full z-20 top-0 start-0 border-b border-bright-orange/30">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link to="/">
            <div className="transform hover:scale-[1.15] transition duration-500 ease-in-out flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src="My-Logo1.png"
                className="h-20 sm:h-16"
                alt="Dawson Adams Logo"
              ></img>
            </div>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link to="/resume">
              <Button> Resum&#232; </Button>
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 mt-0.5 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
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
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
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
