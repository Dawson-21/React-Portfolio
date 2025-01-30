import { Link } from "react-router-dom";
import ContactForm from "../Components/ContactForm";

export default function Resume() {
  return (
    <>
      {/****************** HERO SECTION ******************/}

      <div className="relative isolate px-6 lg:py-0 pt-32 py-10 lg:pt-14 lg:px-8 bg-light dark:bg-dark shadow-lg shadow-bright-orange/45 dark:shadow-gray-900 overflow-clip">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-gradient-to-l from-[#ff4500] to-[#0047ff] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="grid max-w-screen-2xl px-8 py-8 mx-auto fade-in lg:py-20 lg:grid-cols-12">
          <div className="lg:col-span-12">
            <h1 className="max-w-2xl mb-4 mx-auto lg:text-center font-myFont font-extrabold tracking-tight leading-none text-4xl sm:text-5xl lg:text-6xl dark:text-light">
              Resum&#232;
            </h1>
            <p className="max-w-2xl mx-auto font-light text-center text-gray-700 text-lg dark:text-gray-400">
              If my skills and experience align with what you're looking for,
              please feel free to reach out. I would love to connect and
              contribute to your team's success!
            </p>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-30 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div className="relative aspect-[1155/378] -translate-x-1/2 bg-gradient-to-r from-[#0047ff] to-[#ff4500] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>

        {/****************** RESUME SECTION ******************/}

        <div className="place-self-center pb-10">
          <iframe
            src="https://moderndev.pro/wp-content/uploads/2025/01/AI-Software-Engineer.pdf"
            title="Dawson Adams Resume"
            height={1132}
            width={850}
          />
        </div>

        <div className="place-self-center pb-10">
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
        </div>
      </div>

      {/****************** CONTACT FORM SECTION ******************/}

      <div className="md:pt-[8.5vw] pt-[12.5vw] md:pb-[4.5vw] pb-[6.5vw] bg-light">
        <div className="grid grid-cols-3">
          <div className="border-t-2 border-dark md:mt-3 mt-[10px] xl:ml-[25%] lg:ml-[20%] md:ml-[16%] ml-[12%] sm:mr-6 mr-10 xl:translate-x-[15%] lg:translate-x-[5%] md:translate-x-[15%]"></div>

          <h2 className="text-center font-myFont lg:text-lg md:text-base text-sm text-dark tracking-widest">
            SEND ME AN EMAIL
          </h2>

          <div className="border-t-2 border-dark md:mt-3 mt-[10px] xl:mr-[25%] lg:mr-[20%] md:mr-[16%] mr-[12%] sm:ml-6 ml-10 xl:-translate-x-[15%] lg:-translate-x-[5%] md:-translate-x-[15%]"></div>
        </div>

        <ContactForm />
      </div>
    </>
  );
}
