import { useState, useEffect } from "react";

export default function ToTop() {
  const [toTopButton, setToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setToTopButton(true);
    } else {
      setToTopButton(false);
    }
  };

  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="fixed w-full bottom-8 lg:pl-[95%] md:pl-[93%] pl-[90%]">
        {toTopButton && (
          <button
            className="transform hover:scale-[1.15] transition duration-300 ease-in-out relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium hover:text-light rounded-full group 
          bg-gradient-135 from-bright-orange from-20% to-regal-blue to-80% group-hover:from-bright-orange group-hover:to-regal-blue"
            onClick={top}
          >
            <span
              className="relative px-2 py-2 transition-all ease-in duration-0 
              bg-gray-100 dark:bg-dark  text-dark dark:text-light rounded-full group-hover:bg-opacity-0"
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                className="fill-black dark:fill-light"
              >
                <path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </>
  );
}
