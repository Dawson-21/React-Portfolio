import Button from "./Button";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <div className="py-20 bg-gray-100">
        <div className="grid grid-cols-3">
          <div className="border-t-2 border-gray-300 md:mt-3 mt-[10px] xl:ml-[25%] lg:ml-[20%] md:ml-[16%] ml-[12%] md:mr-4 sm:mr-6 mr-10 xl:translate-x-[15%] lg:translate-x-[5%]"></div>
          <h2 className="sm:-mx-4 -mx-10 text-center font-mono lg:text-lg md:text-base text-sm text-gray-500 tracking-widest">
            SOME OF MY LATEST PROJECTS
          </h2>
          <div className="border-t-2 border-gray-300 md:mt-3 mt-[10px] xl:mr-[25%] lg:mr-[20%] md:mr-[16%] mr-[12%] md:ml-4 sm:ml-6 ml-10 xl:-translate-x-[15%] lg:-translate-x-[5%]"></div>
        </div>
        {/* <hr className="w-96 h-[1px] mx-auto border-0 rounded bg-gray-300 translate-x-[370px] -translate-y-[14px]"></hr>
        <hr className="w-96 h-[1px] mx-auto border-0 rounded bg-gray-300 -translate-x-[370px] -translate-y-[15px]"></hr> */}

        <div className="inline-flex xl:mx-[12%] lg:mx-[8%] md:mx-[5%] mx-[4%] lg:gap-10 md:gap-6 sm:gap-4 gap-2 pt-6">
          {/* <Card imgSrc={img1} title={title1} desc={desc1} />

          <Card imgSrc={img2} title={title2} desc={desc2} />

          <Card imgSrc={img3} title={title3} desc={desc3} /> */}
          <div className="md:max-w-sm max-w-[50%] bg-white border-gray-200 rounded-xl shadow dark:bg-gray-950 dark:border-gray-950">
            <Link to="#">
              <img className="rounded-t-lg" src="img-2.png" alt="" />
            </Link>
            <div className="p-5">
              <Link to="#">
                <h5 className="mb-2 lg:text-2xl text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  Portfolio Website Built With React & Tailwind CSS
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                My portfolio website was built from the ground up using React.js
                and Tailwind CSS, with many reusable components and well written
                code.
              </p>
              <Link to="#">
                <Button> Read More </Button>
              </Link>
            </div>
          </div>
          <div className="max-w-sm bg-white border-gray-200 rounded-xl shadow dark:bg-gray-950 dark:border-gray-950">
            <Link to="#">
              <img className="rounded-t-lg" src="img-1.png" alt="" />
            </Link>
            <div className="p-5">
              <Link to="#">
                <h5 className="mb-2 lg:text-2xl text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  Project #2 Built With Java & SpringBoot
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
              <Link to="#">
                <Button> Read More </Button>
              </Link>
            </div>
          </div>
          <div className="max-w-sm hidden md:block bg-white border-gray-200 rounded-xl shadow dark:bg-gray-950 dark:border-gray-950">
            <Link to="#">
              <img className="rounded-t-lg" src="img-1.png" alt="" />
            </Link>
            <div className="p-5">
              <Link to="#">
                <h5 className="mb-2 lg:text-2xl text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  Project #3 Built With Python & Django
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat exercitation.
              </p>
              <Link to="#">
                <Button> Read More </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;

// /* Props for Card 1 */
// let img1 = "img-2.png";
// let title1 = "Portfolio Website Built With React & Tailwind CSS";
// let desc1 =
//   "My portfolio website was built from the ground up using React.js and Tailwind CSS, with many reusable components and well written code.";

// /* Props for Card 2 */
// let img2 = "img-1.png";
// let title2 = "Project #2 Built With Java & SpringBoot";
// let desc2 =
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.";

// /* Props for Card 3 */
// let img3 = "img-1.png";
// let title3 = "Project #3 Built With Python & Django";
// let desc3 =
//   "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat exercitation.";
