import Card from "./Card";

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

        <div className="inline-flex xl:mx-[12%] lg:mx-[8%] md:mx-[5%] mx-[4%] lg:gap-10 md:gap-6 sm:gap-4 gap-2 pt-6">
          <div className="md:max-w-sm max-w-[50%] rounded-xl shadow-xl dark:shadow-none bg-white dark:bg-gray-950 dark:border-gray-950">
            <Card
              img="img-2.png"
              title="Portfolio Website"
              desc="Built from the ground up using React.js
                and Tailwind CSS, with many reusable components and well written
                code."
            />
          </div>
          <div className="lg:max-w-[33%] max-w-[50%] rounded-xl shadow-xl dark:shadow-none bg-white dark:bg-gray-950 dark:border-gray-950">
            <Card
              img="MD3.png"
              title="Web Development Website"
              desc="This is a website designed with WordPress using Elementor. I built the website for my freelance web development business."
            />
          </div>
          <div className="hidden md:block lg:max-w-[33%] max-w-[50%] rounded-xl shadow-xl dark:shadow-none bg-white dark:bg-gray-950 dark:border-gray-950">
            <Card
              img="TGS2.png"
              title="Gutter Business Website"
              desc="I built this website using WordPress and various plugins for optimizations. Simple and sleek one page design for company's new website."
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;
