import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white shadow dark:bg-gray-950">
      <div className="w-full xl:max-w-screen-xl max-w-[90%] mx-auto p-2 sm:py-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              src="My-Logo1.png"
              className="h-20 hover:scale-[1.15] transition duration-500 ease-in-out"
              alt="Dawson Adams Logo"
            />
          </Link>
          <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 mb-0 dark:text-gray-400">
            <li>
              <Link to="/about">
                <p className="hover:underline me-4 md:me-6">About</p>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <p className="hover:underline me-4 md:me-6">Contact</p>
              </Link>
            </li>
            <li>
              <Link to="https://github.com/Dawson-21">
                <p className="hover:underline me-4 md:me-6">Github</p>
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/in/dawson-adams21/">
                <p className="hover:underline">LinkedIn</p>
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © 2023 <p className="inline">Dawson Adams</p>
        </span>
      </div>
    </footer>
  );
}
