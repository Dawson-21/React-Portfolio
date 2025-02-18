import { Link } from "react-router-dom";

export default function Socials() {
    return (
      <>
        <Link to="/facebook">
            <button
            className="transform hover:scale-[1.15] transition duration-200 ease-in-out relative inline-flex items-center justify-center p-0.5 me-4 overflow-hidden text-sm font-medium hover:text-light text-dark dark:text-light rounded-full group 
            bg-gradient-135 from-bright-orange from-20% to-regal-blue to-80% group-hover:from-bright-orange group-hover:to-regal-blue"
            >
            <span
                className="relative transition-all ease-in duration-200 
            bg-light dark:bg-dark rounded-full group-hover:bg-opacity-0"
            >
                <svg
                width="54"
                height="54"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="fill-black dark:fill-light p-2"
                >
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                </svg>
            </span>
            </button>
        </Link>

        <Link to="/insta">
            <button
            className="transform hover:scale-[1.15] transition duration-200 ease-in-out relative inline-flex items-center justify-center p-0.5 me-4 overflow-hidden text-sm font-medium hover:text-light text-dark dark:text-light rounded-full group 
            bg-gradient-135 from-bright-orange from-20% to-regal-blue to-80% group-hover:from-bright-orange group-hover:to-regal-blue"
            >
            <span
                className="relative transition-all ease-in duration-200 
            bg-light dark:bg-dark rounded-full group-hover:bg-opacity-0"
            >
                <svg
                width="54"
                height="54"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="fill-black dark:fill-light p-2"
                >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
            </span>
            </button>
        </Link>

        <Link to="/linkedin">
            <button
            className="transform hover:scale-[1.15] transition duration-200 ease-in-out relative inline-flex items-center justify-center p-0.5 me-4 overflow-hidden text-sm font-medium hover:text-light text-dark dark:text-light rounded-full group 
            bg-gradient-135 from-bright-orange from-20% to-regal-blue to-80% group-hover:from-bright-orange group-hover:to-regal-blue"
            >
            <span
                className="relative transition-all ease-in duration-200 
            bg-light dark:bg-dark rounded-full group-hover:bg-opacity-0"
            >
                <svg
                width="54"
                height="54"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="fill-black dark:fill-light p-2.5"
                >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
            </span>
            </button>
        </Link>

        <Link to="/github">
            <button
            className="transform hover:scale-[1.15] transition duration-200 ease-in-out relative inline-flex items-center justify-center p-0.5 me-4 overflow-hidden text-sm font-medium hover:text-light text-dark dark:text-light rounded-full group 
            bg-gradient-135 from-bright-orange from-20% to-regal-blue to-80% group-hover:from-bright-orange group-hover:to-regal-blue"
            >
            <span
                className="relative transition-all ease-in duration-200 
            bg-light dark:bg-dark rounded-full group-hover:bg-opacity-0"
            >
                <svg
                className="fill-black dark:fill-light p-0.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                fill="currentColor"
                viewBox="0 0 24 24"
                >
                <path
                    fill-rule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                    clip-rule="evenodd"
                />
                </svg>
            </span>
            </button>
        </Link>
    </>
  );
}
