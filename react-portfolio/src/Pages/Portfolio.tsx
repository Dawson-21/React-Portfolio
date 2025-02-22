import Card from "../Components/Card";

export default function Portfolio() {
  return (
    <>
      {/****************** HERO SECTION ******************/}

      <div className="relative isolate px-6 lg:py-0 pt-32 py-10 lg:pt-14 lg:px-8 bg-light dark:bg-dark shadow-lg shadow-bright-orange/45 dark:shadow-gray-900 overflow-clip rounded-b-xl">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-gradient-to-l from-[#ff4500] to-[#0047ff] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="grid max-w-screen-2xl px-8 py-8 mx-auto fade-in lg:py-20 lg:grid-cols-12">
          <div className="lg:col-span-12">
            <h1 className="max-w-2xl mb-4 mx-auto lg:text-center font-myFont font-extrabold tracking-tight leading-none text-4xl sm:text-5xl lg:text-6xl dark:text-light">
              Portfolio
            </h1>
            <p className="max-w-2xl mb-6 mx-auto font-myFont text-[15px] text-justify text-gray-600 lg:mb-8 text-lg dark:text-gray-400">
              From building dynamic systems to crafting user-friendly designs,
              I’m always up for a new coding challenge. Feel free to check out
              my projects and see what I’ve been up to!
            </p>
          </div>
          <div className="hidden -z-10 lg:col-span-12 lg:flex items-center xl:h-36 lg:h-28 pt-10">
            <img
              src="media/TGS.png"
              className="absolute w-auto h-[10vw] fade-in translate-x-[72vw]"
            ></img>
            <img
              src="media/CD.png"
              className="w-auto h-[8vw] absolute fade-in translate-x-[36vw] hidden dark:block"
            ></img>
            <img
              src="media/CD2.png"
              className="w-auto h-[8vw] absolute fade-in translate-x-[36vw] dark:hidden"
            ></img>
            <img
              src="media/MD.png"
              className="w-auto h-[6vw] absolute fade-in translate-x-[7vw] hidden dark:block"
            ></img>
            <img
              src="media/MD2.png"
              className="w-auto h-[5.5vw] absolute fade-in translate-x-[7vw] dark:hidden"
            ></img>
            <img
              src="media/DCTC.png"
              className="w-auto h-[9vw] absolute fade-in -mt-7 translate-x-[51vw]"
            ></img>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-30 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div className="relative aspect-[1155/378] -translate-x-1/2 bg-gradient-to-r from-[#0047ff] to-[#ff4500] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>

      {/****************** PROJECTS SECTION ******************/}

      <div className="py-20 bg-light">
        <div className="grid grid-cols-3">
          <div className="border-t-2 border-dark md:mt-3 mt-[10px] xl:ml-[25%] lg:ml-[20%] md:ml-[16%] ml-[12%] md:mr-4 sm:mr-6 mr-10 xl:translate-x-[15%] lg:translate-x-[5%]"></div>

          <h2 className="sm:-mx-4 -mx-10 text-center font-myFont lg:text-lg md:text-base text-sm text-dark tracking-widest">
            WEB DEVELOPMENT PROJECTS
          </h2>

          <div className="border-t-2 border-dark md:mt-3 mt-[10px] xl:mr-[25%] lg:mr-[20%] md:mr-[16%] mr-[12%] md:ml-4 sm:ml-6 ml-10 xl:-translate-x-[15%] lg:-translate-x-[5%]"></div>
        </div>

        <div className="inline-flex xl:mx-[12%] lg:mx-[8%] md:mx-[5%] mx-[4%] lg:gap-10 md:gap-6 sm:gap-4 gap-2 pt-6">
          <div className="lg:max-w-[33%] max-w-[50%] rounded-xl shadow-xl dark:shadow-none bg-light dark:bg-dark dark:border-dark">
            <Card
              img="media/CNC2.png"
              title="Local Business Website"
              desc="CNC Garage Doors is a locally owned and operated company servicing the residents of the Dallas/Fort Worth Metroplex. CNC reached out for help designing their new website and brand."
            />
          </div>
          <div className="lg:max-w-[33%] max-w-[50%] rounded-xl shadow-xl dark:shadow-none bg-light dark:bg-dark dark:border-dark">
            <Card
              img="media/TGS2.png"
              title="Fresh Website + Brand Redesign"
              desc="I developed this website using WordPress, incorporating various plugins to enhance performance and functionality. The result is a clean, modern, and streamlined one-page design tailored to meet the company’s needs for their new online presence."
            />
          </div>
          <div className="hidden lg:block max-w-[33%] rounded-xl shadow-xl dark:shadow-none bg-light dark:bg-dark dark:border-dark">
            <Card
              img="media/DCTC2.png"
              title="Vegas Carpet Cleaning Website"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore."
            />
          </div>
        </div>

        <div className="inline-flex xl:mx-[12%] lg:mx-[8%] md:mx-[5%] mx-[4%] lg:gap-10 md:gap-6 sm:gap-4 gap-2 pt-10">
          <div className="lg:max-w-[33%] max-w-[50%] rounded-xl shadow-xl dark:shadow-none bg-light dark:bg-dark dark:border-dark">
            <Card
              img="media/img-2.png"
              title="MERN Stack Portfolio"
              desc="Built from the ground up using React.js
                and Tailwind CSS, with many reusable components and well written
                code."
            />
          </div>
          <div className="lg:max-w-[33%] max-w-[50%] rounded-xl shadow-xl dark:shadow-none bg-light dark:bg-dark dark:border-dark">
            <Card
              img="media/MD3.png"
              title="Web Development Website"
              desc="This is a website designed with WordPress using Elementor. I built the website for my freelance web development business."
            />
          </div>
          <div className="hidden md:block lg:max-w-[33%] max-w-[50%] rounded-xl shadow-xl dark:shadow-none bg-light dark:bg-dark dark:border-dark">
            <Card
              img="media/CD4.png"
              title="Demolition Website"
              desc="Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat exercitation."
            />
          </div>
        </div>

        <div className="grid grid-cols-3 pt-20">
          <div className="border-t-2 border-gray-300 md:mt-3 mt-[10px] xl:ml-[25%] lg:ml-[20%] md:ml-[16%] ml-[12%] md:mr-4 sm:mr-6 mr-10 xl:translate-x-[15%] lg:translate-x-[5%]"></div>

          <h2 className="sm:-mx-4 -mx-10 text-center font-mono lg:text-lg md:text-base text-sm text-gray-500 tracking-widest">
            PERSONAL PROJECTS
          </h2>

          <div className="border-t-2 border-gray-300 md:mt-3 mt-[10px] xl:mr-[25%] lg:mr-[20%] md:mr-[16%] mr-[12%] md:ml-4 sm:ml-6 ml-10 xl:-translate-x-[15%] lg:-translate-x-[5%]"></div>
        </div>

        <div className="inline-flex xl:mx-[12%] lg:mx-[8%] md:mx-[5%] mx-[4%] lg:gap-10 md:gap-6 sm:gap-4 gap-2 pt-6">
          <div className="lg:max-w-[33%] max-w-[50%] rounded-xl shadow-xl dark:shadow-none bg-light dark:bg-dark dark:border-dark">
            <Card
              img="media/img-1.png"
              title="Project #1"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna."
            />
          </div>
          <div className="lg:max-w-[33%] max-w-[50%] rounded-xl shadow-xl dark:shadow-none bg-light dark:bg-dark dark:border-dark">
            <Card
              img="media/img-1.png"
              title="Project #2"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna."
            />
          </div>
          <div className="hidden md:block lg:max-w-[33%] max-w-[50%] rounded-xl shadow-xl dark:shadow-none bg-light dark:bg-dark dark:border-dark">
            <Card
              img="media/img-1.png"
              title="Project #3"
              desc="Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat exercitation."
            />
          </div>
        </div>
      </div>
    </>
  );
}
