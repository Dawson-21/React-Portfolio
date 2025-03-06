import PieChart from "../components/PieChart";
import IconBox from "../components/IconBox";
import IconList from "../components/IconList";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <>
      {/****************** HERO SECTION ******************/}

      <div className="relative isolate px-6 lg:pt-14 lg:pb-0 pt-24 pb-3 lg:px-8 bg-bg dark:bg-dark shadow-md shadow-regal-blue/45 dark:shadow-white overflow-clip">
        <div
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative aspect-[1155/678] translate-x-1/2 rotate-[180deg] bg-gradient-to-l from-[#ff4500] to-[#0047ff] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="grid max-w-screen-2xl px-8 py-8 mx-auto lg:px-16 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="hidden -z-10 lg:col-span-5 lg:flex lg:-ml-[7%] lg:pt-0 lg:mt-16 md:-mb-16 xl:h-[33vw] lg:h-[30vw] xl:w-[50vw] lg:w-[45vw]">
            <img
              src="media/hero-img2.png"
              alt="Dawson Adams"
              className="fade-right"
             />
          </div>
          <div className="place-self-center lg:col-span-7 fade-in lg:mt-0 mt-8">
            <h1 className="max-w-2xl mb-4 font-myFont font-bold tracking-tight leading-none text-4xl sm:text-5xl lg:text-5xl xl:text-6xl dark:text-white lg:text-center">
              About
            </h1>
            <p className="max-w-2xl font-myFont text-[15px] text-justify text-gray-600 lg:mb-8 md:mb-0 mb-6 text-lg dark:text-gray-400">
              I&#39;m passionate about all things code and love diving into new
              skills and challenges to keep growing my expertise. When I&#39;m not
              wrestling with code, you can find me whipping up something tasty
              in the kitchen, exploring the great outdoors, or hanging out with
              my many pets.
            </p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 -translate-x-[700px] translate-y-16 -z-30 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div className="relative aspect-[1155/378] -translate-x-1/2 bg-gradient-to-r from-[#0047ff] to-[#ff4500] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      {/****************** PIE CHART SECTION ******************/}

      <PieChart />

      {/****************** FUN FACTS SECTION ******************/}

      <div className="bg-light dark:bg-dark2 pb-20">
        <hr className="w-full h-[2px] mx-auto border-0 bg-gray-300" />

        <SectionTitle>FUN FACTS</SectionTitle>

        <div className="grid lg:grid-cols-4 grid-cols-2 font-myFont text-dark dark:text-white xl:text-lg sm:text-base text-[14px] pt-5">
          <div className="lg:-mt-4 -mt-2 md:-ml-0 -ml-10 xl:space-y-[0.9vw] space-y-[0.6vw]">
            <IconList img="media/recipe.svg" alt="Cake icon" />
            <IconList img="media/piano.svg" alt="Piano icon" />
            <IconList img="media/snake.svg" alt="Snake icon" />
          </div>

          <div className="lg:-ml-[34%] md:-ml-[24%] sm:-ml-[39%] -ml-[72%] lg:-mr-6 xl:space-y-[3.2vw] lg:space-y-[3.4vw] md:space-y-[3.9vw] sm:space-y-[4.5vw] space-y-[1.8rem]">
            <p>I enjoy experimenting with new vegan recipes</p>
            <p>Piano and Guitar are my favorite instruments to play</p>
            <p>I have three snakes, a bearded dragon, and a cat</p>
          </div>

          <div className="lg:-mt-4 mt-[0.6vw] md:-ml-0 -ml-10 xl:space-y-[0.9vw] space-y-[0.6vw]">
            <IconList img="media/beach.svg" alt="Palm tree icon" />
            <IconList img="media/pyramid.svg" alt="Pyramid icon" />
            <IconList img="media/tesla.svg" alt="Tesla tower icon" />
          </div>

          <div className="lg:-ml-[34%] md:-ml-[24%] sm:-ml-[39%] -ml-[72%] xl:space-y-[3.2vw] lg:space-y-[3.4vw] md:space-y-[3.9vw] sm:space-y-[4.5vw] space-y-[1.8rem] lg:pt-0 sm:pt-[1.8vw] pt-[2.9vw]">
            <p>I love going to the beach</p>
            <p>I&#39;m slightly obsessed with ancient civilizations</p>
            <p>Alan Watts & Nicola Tesla are my mentors</p>
          </div>
        </div>
      </div>

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

        <hr className="w-full h-[2px] mx-auto border-0 bg-gray-300 xl:mt-20 lg:mt-5" />
      </div>

      {/****************** SKILLS SECTION ******************/}

      <div className="md:block hidden bg-light dark:bg-dark2 overflow-y-hidden">
        <SectionTitle>SKILLS</SectionTitle>

        <div className="inline-flex pt-5">
          <div className="lg:w-[22vw] w-[16vw] -mt-4 pr-6 xl:space-y-[67px] md:space-y-[72px] text-right font-myFont xl:text-lg md:text-base dark:text-white">
            <p>Master</p>
            <p>Journeyman</p>
            <p>Apprentice</p>
            <p>Rookie</p>
          </div>

          <div className="2xl:w-[60vw] xl:w-[60vw] lg:w-[60vw] md:w-[72vw] border-l-[2px] border-gray-300">
            <div className="border-y-[2px] border-gray-300 h-24" />
            <div className="h-24" />
            <div className="border-y-[2px] border-gray-300 h-24" />
            <div className="h-24 flex">
              <div className="w-[11.5vw] h-[288.5px] -translate-y-[193px] ml-5 bg-light dark:bg-dark2 overflow-hidden">
                <p className="xl:pt-[194px] md:pt-[209px] font-extralight text-dark dark:text-white text-center xl:text-5xl lg:text-4xl md:text-3xl">
                  75%
                </p>
                <p className="font-myFont text-dark dark:text-white text-center xl:text-xl lg:text-base md:text-sm">
                  C/C++
                </p>
                <div className="border-0 rounded-full w-40 h-80 -translate-y-[400px] translate-x-1 bg-gradient-45 from-bright-orange from-20% to-regal-blue to-80% blur-2xl" />
              </div>

              <div className="w-[11.5vw] h-[345px] -translate-y-[249px] ml-5 bg-light dark:bg-dark2 overflow-hidden">
                <p className="xl:pt-[250px] md:pt-[265px] font-extralight text-dark dark:text-white text-center xl:text-5xl lg:text-4xl md:text-3xl">
                  90%
                </p>
                <p className="font-myFont text-dark dark:text-white text-center xl:text-xl lg:text-base md:text-sm">
                  HTML/CSS
                </p>
                <div className="border-0 rounded-full w-40 h-80 -translate-y-[400px] translate-x-1 bg-gradient-to-br from-bright-orange from-20% to-regal-blue to-80% blur-2xl" />
              </div>

              <div className="w-[11.5vw] h-[325px] -translate-y-[229px] ml-5 bg-light dark:bg-dark2 overflow-hidden">
                <p className="xl:pt-[230px] md:pt-[245px] font-extralight text-dark dark:text-white text-center xl:text-5xl lg:text-4xl md:text-3xl">
                  85%
                </p>
                <p className="font-myFont text-dark dark:text-white text-center xl:text-xl lg:text-base md:text-sm">
                  TypeScript
                </p>
                <div className="border-0 rounded-full w-40 h-80 -translate-y-[400px] translate-x-1 bg-gradient-to-t from-bright-orange from-20% to-regal-blue to-80% blur-2xl" />
              </div>

              <div className="w-[11.5vw] h-[305px] -translate-y-[209px] ml-5 bg-light dark:bg-dark2 overflow-hidden">
                <p className="xl:pt-[210px] md:pt-[225px] font-extralight text-dark dark:text-white text-center xl:text-5xl lg:text-4xl md:text-3xl">
                  80%
                </p>
                <p className="font-myFont text-dark dark:text-white text-center xl:text-xl lg:text-base md:text-sm">
                  React JS
                </p>
                <div className="border-0 rounded-full w-40 h-80 -translate-y-[400px] translate-x-1 bg-gradient-to-b from-bright-orange from-20% to-regal-blue to-80% blur-2xl" />
              </div>

              <div className="w-[11.5vw] h-[250px] -translate-y-[154.5px] ml-5 bg-light dark:bg-dark2 overflow-hidden">
                <p className="xl:pt-[156px] md:pt-[173px] font-extralight text-dark dark:text-white text-center xl:text-5xl lg:text-4xl md:text-3xl">
                  65%
                </p>
                <p className="font-myFont text-dark dark:text-white text-center xl:text-xl lg:text-base md:text-xs">
                  Python
                </p>
                <div className="border-0 rounded-full w-40 h-80 -translate-y-[400px] translate-x-1 bg-gradient-135 from-bright-orange from-20% to-regal-blue to-80% blur-2xl" />
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full h-[2px] mx-auto border-0 bg-gray-300" />
      </div>

      {/****************** VALUES SECTION ******************/}

      <div className="bg-light dark:bg-dark2">
        <SectionTitle>CORE VALUES</SectionTitle>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 pb-20 -mt-5 2xl:mx-[8%]">
          <div className="xl:pl-16 xl:-mr-16 py-8">
            <IconBox
              icon="media/collab2.svg"
              alt="Collaboration icon"
              title="Collaboration"
              desc="I believe that effective teamwork and clear communication are
              essential for achieving success, whether collaborating within a
              team or contributing to open-source projects. In my personal
              experience, cooperation and shared goals drive the best outcomes."
            />
          </div>

          <div className="py-8">
            <IconBox
              icon="media/learn2.svg"
              alt="Brain and pencil icon"
              title="Continuous Learning"
              desc="I&#39;m committed to continuous self-improvement and skill
              development, always eager to take on new challenges and master
              emerging technologies. This drive ensures I remain adaptable and
              ready to excel in any environment."
            />
          </div>

          <div className="xl:pr-16 xl:-ml-16 py-8">
            <IconBox
              icon="media/quality2.svg"
              alt="Sparkling diamond icon"
              title="Quality"
              desc="I take pride in delivering high-quality work, from writing clean,
              efficient code to ensuring every project meets the highest
              standards. My attention to detail reflects my commitment to
              excellence in every aspect of my work."
            />
          </div>

          <div className="xl:pl-16 xl:-mr-16 py-8">
            <IconBox
              icon="media/trust2.svg"
              alt="Handshake icon"
              title="Integrity"
              desc="I approach my work with honesty and integrity, ensuring that
              transparency and accountability are at the core of everything I
              do. Trustworthiness is a value I uphold in all my professional
              endeavors."
            />
          </div>

          <div className="py-8">
            <IconBox
              icon="media/innovate2.svg"
              alt="Light bulb icon"
              title="Innovation"
              desc="I&#39;m dedicated to staying ahead in the ever-evolving tech landscape
              by continuously learning and exploring new ideas. Embracing
              innovation drives me to push boundaries and deliver cutting-edge
              solutions."
            />
          </div>

          <div className="xl:pr-16 xl:-ml-16 py-8">
            <IconBox
              icon="media/creative2.svg"
              alt="Web art icon"
              title="Creativity"
              desc="I thrive on thinking outside the box, finding creative solutions
              to complex problems, and bringing unique perspectives to every
              project I tackle. My approach blends innovation with practicality,
              ensuring fresh ideas that drive meaningful results."
            />
          </div>
        </div>
      </div>
    </>
  );
}
