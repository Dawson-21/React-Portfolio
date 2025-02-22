import { Link } from "react-router-dom";

export default function Footer() {
  const top = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <footer className="shadow dark:bg-dark border-t-[1px] border-bright-orange/85 font-myFont">
      <div className="w-full max-w-[89%] mx-auto p-2 sm:py-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              src="media/My-Logo1.png"
              className="h-[64px] hover:scale-[1.15] transition duration-500 ease-in-out"
              alt="Dawson Adams Logo"
              onClick={top}
            />
          </Link>
          <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 mb-0 dark:text-gray-400">
            <li>
              <Link to="/about" onClick={top}>
                <p className="hover:underline me-4 md:me-6">About</p>
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={top}>
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
        <hr className="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © 2025 <p className="inline">Dawson Adams</p>
        </span>
      </div>
    </footer>
  );
}
