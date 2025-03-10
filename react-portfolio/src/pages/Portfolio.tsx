import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";

export default function Portfolio() {
  return (
    <>
      {/****************** HERO SECTION ******************/}

      <div className="relative isolate px-6 lg:py-0 pt-32 py-10 lg:pt-14 lg:px-8 bg-light dark:bg-dark shadow-md shadow-bright-orange/45 dark:shadow-white overflow-clip">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-gradient-to-l from-[#ff4500] to-[#0047ff] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="grid max-w-screen-2xl px-4 py-8 mx-auto sm:px-8 lg:py-40 fade-in lg:grid-cols-12">
          <div className="md:col-span-12">
            <h1 className="max-w-2xl mb-4 mx-auto md:text-center font-myFont font-bold tracking-tight leading-none text-4xl sm:text-5xl lg:text-6xl dark:text-light">
              Portfolio
            </h1>
            <p className="max-w-2xl mb-6 mx-auto font-myFont text-[15px] text-justify text-gray-600 lg:mb-8 text-lg dark:text-gray-400">
              From building dynamic systems to crafting user-friendly designs,
              I&#39;m always up for a new coding challenge. Feel free to check out
              my projects and see what I&#39;ve been up to!
            </p>
          </div>
          <div className="hidden -z-10 md:col-span-12 md:flex items-center justify-center md:h-[245px] pt-10 space-x-[2vw]">
            <img
              src="media/MD-Logo.png"
              alt="Modern Dev Logo"
              className="w-auto h-[5.7vw] dark:hidden"
             />
            <img
              src="media/MD-Logo-dark.png"
              alt="Modern Dev Logo"
              className="w-auto h-[6vw] hidden dark:block"
             />
            <img
              src="media/CD.png"
              alt="Clayton Demolition Logo"
              className="w-auto h-[8vw] hidden dark:block"
             />
            <img
              src="media/CD1.png"
              alt="Clayton Demolition Logo"
              className="w-auto h-[8vw] dark:hidden"
             />
            <img
              src="media/TGS.png"
              alt="Texas Gutter Service Logo"
              className="w-auto h-[10vw]"
             />
            <img
              src="media/DCTC.png"
              alt="Details Carpet and Tile Care Logo"
              className="w-auto h-[9vw] -mt-7"
             />
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

      <div className="md:pb-32 pb-20 md:pt-10 bg-light dark:bg-dark2">

        <SectionTitle>WEB DEVELOPMENT PROJECTS</SectionTitle>

        <div className="sm:inline-flex sm:flex-row flex-col xl:mx-[12%] lg:mx-[8%] md:mx-[5%] mx-[4%] lg:gap-5 md:gap-4 sm:gap-3 gap-2">
          <div className="lg:max-w-[33%] sm:max-w-[60%] rounded-xl shadow-xl dark:shadow-none bg-white dark:bg-dark dark:border-light border-white border-2">
            <Card
              img="media/CNC2.png"
              alt="CNC Garage Doors Website"
              title="Local Business Website"
              desc="Built a user-friendly one-page website for CNC Garage Doors with WordPress, employing my proficiency in custom plugin integration, 
              cross-browser compatibility, and mobile-first design to ensure a seamless experience across all devices."
            />
          </div>
          <div className="lg:max-w-[33%] sm:max-w-[60%] sm:mt-0 mt-5 rounded-xl shadow-xl dark:shadow-none bg-white dark:bg-dark dark:border-light border-white border-2">
            <Card
              img="media/TGS2.png"
              alt="Texas Gutter Service Website"
              title="Fresh Website + Brand Redesign"
              desc="Created an optimized one-page website for Texas Gutter Service with WordPress, utilizing my expertise in custom theme development, 
              responsive design principles, and advanced SEO techniques to ensure high visibility and user engagement."
            />
          </div>
          <div className="hidden lg:block max-w-[31%] rounded-xl shadow-xl dark:shadow-none bg-white dark:bg-dark dark:border-light border-white border-2">
            <Card
              img="media/details.png"
              alt="Details Carpet and Tile Care Website"
              title="Vegas Carpet Cleaning Website"
              desc="Designed a sleek one-page website for Details Carpet and Tile Care using WordPress, incorporating my skills in UX/UI design, intuitive 
              navigation, and performance optimization to provide an excellent user experience."
            />
          </div>
        </div>

        <div className="sm:inline-flex sm:flex-row flex-col xl:mx-[12%] lg:mx-[8%] md:mx-[5%] mx-[4%] lg:gap-5 md:gap-4 sm:gap-3 gap-2 sm:pt-10 pt-5">
          <div className="lg:max-w-[33%] sm:max-w-[50%] rounded-xl shadow-xl dark:shadow-none bg-white dark:bg-dark dark:border-light border-white border-2">
            <Card
              img="media/img-2.png"
              alt="Portfolio Website"
              title="React Portfolio"
              desc="This modern, fully responsive site showcases my web development projects and skills, providing a dynamic and engaging experience 
              for potential clients and collaborators. The website leverages React for efficient component-based development, Tailwind CSS for rapid 
              and responsive design, and Vercel for seamless deployment and hosting."
            />
          </div>
          <div className="lg:max-w-[33%] sm:max-w-[50%] sm:mt-0 mt-5 rounded-xl shadow-xl dark:shadow-none bg-white dark:bg-dark dark:border-light border-white border-2">
            <Card
              img="media/MD1.png"
              alt="Modern Dev Website"
              title="Web Development Website"
              desc="Crafted a professional Wordpress website for my web development company, Modern Dev. Incorporating plugins like MonsterInsights, 
              the website features vast analytics and user engaement metrics. This project emphasizes the innovative and client-focused approach that my work embodies."
            />
          </div>
          <div className="hidden lg:block lg:max-w-[33%] max-w-[50%] rounded-xl shadow-xl dark:shadow-none bg-white dark:bg-dark dark:border-light border-white border-2">
            <Card
              img="media/CD2.png"
              alt="Clayton Demolition Website"
              title="Demolition Website"
              desc="Developed a robust and professional one-page website for Clayton Demolition using WordPress, leveraging Elementor for easy design, 
              LiteSpeed Cache for enhanced performance, and All in One SEO for optimized search engine presence."
            />
          </div>
        </div>
        
        <SectionTitle>PERSONAL PROJECTS</SectionTitle>

        <div className="sm:inline-flex sm:flex-row flex-col xl:mx-[12%] lg:mx-[8%] md:mx-[5%] mx-[4%] lg:gap-5 md:gap-4 sm:gap-3 gap-2">
          <div className="lg:max-w-[33%] sm:max-w-[50%] rounded-xl shadow-xl dark:shadow-none bg-white dark:bg-dark dark:border-light border-white border-2">
            <Card
              img="media/img-1.png"
              alt="Project #1"
              title="Project #1"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna."
            />
          </div>
          <div className="lg:max-w-[33%] sm:max-w-[50%] sm:mt-0 mt-5 rounded-xl shadow-xl dark:shadow-none bg-white dark:bg-dark dark:border-light border-white border-2">
            <Card
              img="media/img-1.png"
              alt="Project #2"
              title="Project #2"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna."
            />
          </div>
          <div className="hidden md:block lg:max-w-[33%] max-w-[50%] rounded-xl shadow-xl dark:shadow-none bg-white dark:bg-dark dark:border-light border-white border-2">
            <Card
              img="media/img-1.png"
              alt="Project #3"
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
