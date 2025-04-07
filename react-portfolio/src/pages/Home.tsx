import { Link } from "react-router-dom";
import Button2 from "../components/Button2";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import PieChart from "../components/PieChart";

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

        <div className="grid max-w-screen-2xl px-4 py-8 mx-auto sm:px-8 xl:px-16 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 fade-in">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 md:-mr-20 -mr-12 font-myFont font-bold tracking-tight leading-none [@media(max-width:450px)]:text-[26px] text-4xl sm:text-5xl lg:text-5xl xl:text-[55px] dark:text-light">
              Hi, I&#39;m Dawson Adams
            </h1>

            <p className="max-w-2xl mb-6 font-myFont text-[15px] sm:text-justify text-gray-600 lg:mb-8 xl:pr-20 lg:pr-10 text-lg dark:text-gray-400">
              Professional web developer and React engineer with skills ranging
              from front-end design and user experience optimization to back-end
              development and database management. I graduated from Texas A&M
              University - Corpus Christi with a B.S. in Computer Science.
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
          <div className="md:max-w-[33%] rounded-xl shadow-xl dark:shadow-none bg-white dark:bg-dark dark:border-light border-white border-2">
            <Card
              img="media/TGS2.png"
              alt="Texas Gutter Service Website"
              title="Gutter Business Website"
              desc="Clean one-page website for Texas Gutter Service, utilizing my expertise in custom theme development, 
              responsive design principles, and advanced SEO techniques to ensure high visibility and user engagement."
              btn="View Project"
              link="https://texasgutterservice.com"
              newPage
            />
          </div>
          <div className="md:max-w-[33%] sm:mt-0 mt-5 rounded-xl shadow-xl dark:shadow-none bg-white dark:bg-dark dark:border-light border-white border-2">
            <Card
              img="media/MD1.png"
              alt="Modern Dev Website"
              title="Web Development Website"
              desc="Crafted a professional Wordpress website for my freelance web development business, Modern Dev. Incorporating plugins like MonsterInsights, 
              the website features vast analytics and user engaement metrics."
              btn="View Project"
              link="https://moderndev.pro"
              newPage
            />
          </div>
          <div className="block sm:hidden md:block md:max-w-[33%] sm:mt-0 mt-5 rounded-xl shadow-xl dark:shadow-none bg-white dark:bg-dark dark:border-light border-white border-2">
            <Card
              img="media/CNC2.png"
              alt="CNC Garage Doors Website"
              title="Local Business Website"
              desc="Built a user-friendly one-page website for CNC Garage Doors with WordPress, employing my proficiency in custom plugin integration, 
              cross-browser compatibility, and mobile-first design to ensure a seamless experience across all devices."
              btn="View Project"
              link="https://cncgaragedoors.com"
              newPage
            />
          </div>
        </div>
        <hr className="w-full h-[2px] mx-auto border-0 bg-gray-300 xl:mt-20 lg:mt-5" />
      </div>

      {/****************** PIE CHART SECTION ******************/}

      <PieChart />

      {/****************** EDUCATION SECTION ******************/}

      <div className="bg-light dark:bg-dark2">
        <hr className="w-full h-[2px] mx-auto border-0 bg-gray-300" />

        <SectionTitle>EDUCATION</SectionTitle>

        <div className="grid max-w-[1400px] lg:grid-cols-2 lg:h-[400px] lg:px-0 md:px-20 px-10 md:pb-20 pb-10 pt-5 place-self-center">
          <div className="lg:-mb-10 h-auto">
            <img
              src="media/tamucc.png"
              alt="Texas A&M University - Corpus Christi Logo"
              className="h-auto max-w-[600px] 2xl:w-[80%] xl:w-[80%] lg:w-[75%] sm:w-[40%] w-[50%] 
                          xl:pl-[10%] xl:mx-0 lg:mx-auto lg:pr-0 pr-5 sm:ml-[27%] ml-[20%]"
            />
          </div>

          <div className="font-myFont font-light dark:text-white leading-normal xl:text-lg lg:text-md text-base max-w-[770px] xl:-ml-[10%] lg:-ml-[9%] lg:mr-[10%] space-y-2 lg:mt-0 mt-5">
            <p>
              In December 2023, I earned my Bachelor&#39;s degree in Computer
              Science with a specialization in Systems Programming from Texas
              A&M University - Corpus Christi. During my time at the university,
              I built a strong foundation in fundamental computer science
              principles, including algorithms, data structures, and software
              design, while exploring various fields within the industry. It was
              during this time that I discovered my passion for coding and the
              challenge of developing complex, scalable systems from the ground
              up.
            </p>
            <p>
              Since graduation, I’ve continued to deepen my expertise,
              recognizing that the world of software development is vast and
              ever-evolving. My commitment to lifelong learning drives me to
              continuously expand my skill set, experimenting with new
              programming languages and tools to stay current in this fast-paced
              field.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
