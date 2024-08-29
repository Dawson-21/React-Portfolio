import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white shadow dark:bg-gray-950">
      <div className="w-full max-w-screen-xl mx-auto p-2 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/">
            <img src="My-Logo1.png" className="h-20" alt="Dawson Adams Logo" />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
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
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link to="/" className="inline-block">
            <p className="hover:underline">Dawson Adams</p>
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
