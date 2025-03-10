import { Link } from "react-router-dom";
import Button2 from "../components/Button2";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
  return (
    <>
      {/****************** HERO SECTION ******************/}

      <div className="relative isolate px-6 lg:py-0 pt-28 py-10 lg:pt-14 lg:px-8 bg-light dark:bg-dark shadow-md shadow-bright-orange/45 dark:shadow-white overflow-clip">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-gradient-to-l from-[#ff4500] to-[#0047ff] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="grid max-w-screen-2xl px-8 py-8 mx-auto xl:px-16 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 fade-in">
          <div className="mr-auto place-self-center lg:col-span-7">

            <h1 className="max-w-2xl mb-4 md:-mr-20 -mr-8 font-myFont font-bold tracking-tight leading-none [@media(max-width:450px)]:text-3xl text-4xl sm:text-5xl lg:text-5xl xl:text-[55px] dark:text-light">
              Hi, I&#39;m Dawson Adams
            </h1>

            <p className="max-w-2xl mb-6 font-myFont text-[15px] sm:text-justify text-gray-600 lg:mb-8 xl:pr-20 lg:pr-10 text-lg dark:text-gray-400">
              Professional web developer and aspiring software engineer with
              skills ranging from front-end design and user experience
              optimization to back-end development and database management. I
              recently graduated from Texas A&M University - Corpus Christi with
              a Bachelor of Computer Science.
            </p>

            <Link to="/about">
              <button
                className="transform hover:scale-[1.15] transition duration-200 ease-in-out relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-myFont text-dark font-extrabold hover:text-light dark:text-light rounded-lg group 
                bg-gradient-135 from-bright-orange from-20% to-regal-blue to-80% group-hover:from-bright-orange group-hover:to-regal-blue"
              >
                <span
                  className="relative px-5 py-2.5 transition-all ease-in duration-200 
                bg-light dark:bg-slate-950 rounded-md group-hover:bg-opacity-0"
                >
                  Learn More
                </span>
              </button>
            </Link>

            <Link to="/portfolio">
              <div className="inline-flex sm:px-5 px-3 py-3 -mr-5 font-myFont hover:scale-[1.15] transition duration-500 ease-in-out">
                <Button2>View My Work</Button2>
              </div>
            </Link>
          </div>

          <div className="hidden -z-10 lg:col-span-5 lg:flex xl:-ml-[27%] lg:-ml-[20%] lg:pt-0 lg:mt-16 md:-mb-16 xl:h-[33vw] lg:h-[30vw] xl:w-[50vw] lg:w-[45vw] fade-left">
            <img src="media/hero-img.png" alt="Dawson Adams" />
          </div>

        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-30 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div className="relative aspect-[1155/378] -translate-x-1/2 bg-gradient-to-r from-[#0047ff] to-[#ff4500] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>

      </div>

      {/****************** PROJECTS SECTION ******************/}

      <div className="md:pb-32 pb-20 md:pt-10 dark:bg-dark2 bg-light">

        <SectionTitle>MY LATEST PROJECTS</SectionTitle>
                
        <div className="sm:inline-flex sm:flex-row flex-col xl:mx-[12%] lg:mx-[8%] md:mx-[5%] mx-[4%] lg:gap-5 md:gap-4 sm:gap-3 gap-2">
          <div className="md:max-w-md sm:max-w-[50%] rounded-xl shadow-xl dark:shadow-none bg-white dark:bg-dark dark:border-light dark:border-2">
            <Card
              img="media/img-2.png"
              alt="Portfolio Website"
              title="Portfolio Website"
              desc="This responsive site, built with React, Tailwind, and Vercel, showcases my web development projects and skills, providing 
              a dynamic and engaging experience for potential clients and collaborators."
            />
          </div>
          <div className="lg:max-w-[33%] sm:max-w-[50%] sm:mt-0 mt-5 rounded-xl shadow-xl dark:shadow-none bg-white dark:bg-dark dark:border-light dark:border-2">
            <Card
              img="media/MD3.png"
              alt="Modern Dev Website"
              title="Web Development Website"
              desc="Crafted a professional Wordpress website for my web development company, Modern Dev. Incorporating plugins like MonsterInsights, 
              the website features vast analytics and user engaement metrics."
            />
          </div>
          <div className="block sm:hidden md:block lg:max-w-[33%] sm:max-w-[50%] sm:mt-0 mt-5 rounded-xl shadow-xl dark:shadow-none bg-white dark:bg-dark dark:border-light dark:border-2">
            <Card
              img="media/TGS2.png"
              alt="Texas Gutter Service Website"
              title="Gutter Business Website"
              desc="Clean one-page website for Texas Gutter Service, utilizing my expertise in custom theme development, 
              responsive design principles, and advanced SEO techniques to ensure high visibility and user engagement."
            />
          </div>
        </div>
      </div>
    </>
  );
}
