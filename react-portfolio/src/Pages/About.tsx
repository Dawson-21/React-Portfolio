import Hero2 from "../Components/Hero2";
import PieChart from "../Components/PieChart";
import IconBox from "../Components/IconBox";
import IconList from "../Components/IconList";
import SectionTitle from "../Components/SectionTitle";

export default function About() {
  return (
    <>
      <Hero2
        title="About"
        desc="I'm passionate about all things code and love diving into new skills and challenges to keep growing my expertise. When I'm not wrestling with code, you can find me whipping up something tasty in the kitchen, exploring the great outdoors, or hanging out with my many pets."
      />

      <PieChart />

      <div className="bg-gray-100 pb-20">
        <hr className="w-full h-[2px] mx-auto border-0 bg-gray-300" />

        <SectionTitle>FUN FACTS</SectionTitle>

        <div className="grid lg:grid-cols-4 grid-cols-2 font-light xl:text-lg lg:text-base">
          <div className="lg:-mt-4 -mt-2 xl:space-y-[0.9vw] space-y-[0.6vw]">
            <IconList img="recipe.svg" />
            <IconList img="piano.svg" />
            <IconList img="snake.svg" />
          </div>

          <div className="lg:-ml-[34%] md:-ml-[26%] sm:-ml-[36%] -ml-[60%] lg:-mr-3 lg:space-y-[2.7vw] sm:space-y-[3.1vw] space-y-[3.5vw]">
            <p>I enjoy experimenting with new vegan recipes</p>
            <p>Piano and Guitar are my favorite instruments to play</p>
            <p>I have three snakes, a bearded dragon, and a cat</p>
          </div>

          <div className="lg:-mt-4 mt-[0.6vw] xl:space-y-[0.9vw] space-y-[0.6vw]">
            <IconList img="beach.svg" />
            <IconList img="pyramid.svg" />
            <IconList img="tesla.svg" />
          </div>

          <div className="lg:-ml-[34%] md:-ml-[26%] sm:-ml-[36%] -ml-[60%] lg:space-y-[2.7vw] sm:space-y-[3.1vw] space-y-[4vw] lg:pt-0 pt-[1.8vw]">
            <p>I want to live on the beach</p>
            <p>I'm slightly obsessed with ancient civilizations</p>
            <p>Nicola Tesla is my mentor</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <hr className="w-full h-[2px] mx-auto border-0 bg-gray-300" />

        <SectionTitle>EDUCATION</SectionTitle>

        <div className="grid lg:grid-cols-2 lg:h-[400px] lg:px-0 md:px-20 px-10 md:pb-20 pb-10">
          <div className="lg:-mb-10 h-auto">
            <img
              src="tamucc.png"
              className="h-auto xl:w-[80%] lg:w-[70%] md:w-[40%] sm:w-[40%] w-[50%] xl:pl-[10%] xl:mx-0 lg:mx-auto lg:pr-0 pr-5 sm:ml-[27%] ml-[20%]"
            />
          </div>

          <div className="font-light xl:text-lg lg:text-base xl:-ml-[10%] lg:-ml-[6%] lg:mr-[10%] space-y-5 lg:mt-0 mt-5">
            <p>
              In December 2023, I earned my Bachelor’s degree in Computer
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
              field. Below is a breakdown of my key skills and preferred
              programming languages.
            </p>
          </div>
        </div>

        <hr className="w-full h-[2px] mx-auto border-0 bg-gray-300" />
      </div>

      <div className="bg-gray-100 md:block hidden overflow-y-hidden">
        <SectionTitle>SKILLS</SectionTitle>

        <div className="inline-flex">
          <div className="w-[16vw] -mt-4 pr-6 xl:space-y-[67px] md:space-y-[72px] text-right font-light xl:text-lg md:text-base">
            <p>Master</p>
            <p>Journeyman</p>
            <p>Apprentice</p>
            <p>Rookie</p>
          </div>

          <div className="xl:w-[67vw] lg:w-[69vw] md:w-[72vw] border-l-[2px] border-gray-300">
            <div className="border-y-[2px] border-gray-300 h-24"></div>
            <div className="h-24"></div>
            <div className="border-y-[2px] border-gray-300 h-24"></div>
            <div className="h-24 flex">
              <div className="w-[11.5vw] h-[288.5px] -translate-y-[192px] ml-5 bg-gray-100 dark:bg-slate-950 overflow-hidden">
                <p className="xl:pt-[193px] md:pt-[208px] font-extralight text-slate-950 dark:text-white text-center xl:text-5xl lg:text-4xl md:text-3xl">
                  75%
                </p>
                <p className="font-mono text-slate-950 dark:text-white text-center xl:text-xl lg:text-base md:text-sm">
                  C/C++
                </p>
                <div className="border-0 rounded-full w-40 h-80 -translate-y-[370px] translate-x-1 bg-gradient-45 from-bright-orange from-20% to-regal-blue to-80% blur-2xl dark:opacity-20"></div>
              </div>

              <div className="w-[11.5vw] h-[345px] -translate-y-[249px] ml-5 bg-gray-100 dark:bg-slate-950 overflow-hidden">
                <p className="xl:pt-[250px] md:pt-[265px] font-extralight text-slate-950 dark:text-white text-center xl:text-5xl lg:text-4xl md:text-3xl">
                  90%
                </p>
                <p className="font-mono text-slate-950 dark:text-white text-center xl:text-xl lg:text-base md:text-sm">
                  HTML/CSS
                </p>
                <div className="border-0 rounded-full w-40 h-80 -translate-y-[370px] translate-x-1 bg-gradient-to-br from-bright-orange from-20% to-regal-blue to-80% blur-2xl dark:opacity-20"></div>
              </div>

              <div className="w-[11.5vw] h-[325px] -translate-y-[228.5px] ml-5 bg-gray-100 dark:bg-slate-950 overflow-hidden">
                <p className="xl:pt-[230px] md:pt-[245px] font-extralight text-slate-950 dark:text-white text-center xl:text-5xl lg:text-4xl md:text-3xl">
                  85%
                </p>
                <p className="font-mono text-slate-950 dark:text-white text-center xl:text-xl lg:text-base md:text-sm">
                  TypeScript
                </p>
                <div className="border-0 rounded-full w-40 h-80 -translate-y-[370px] translate-x-1 bg-gradient-to-t from-bright-orange from-20% to-regal-blue to-80% blur-2xl dark:opacity-20"></div>
              </div>

              <div className="w-[11.5vw] h-[305px] -translate-y-[208.5px] ml-5 bg-gray-100 dark:bg-slate-950 overflow-hidden">
                <p className="xl:pt-[210px] md:pt-[225px] font-extralight text-slate-950 dark:text-white text-center xl:text-5xl lg:text-4xl md:text-3xl">
                  80%
                </p>
                <p className="font-mono text-slate-950 dark:text-white text-center xl:text-xl lg:text-base md:text-sm">
                  React JS
                </p>
                <div className="border-0 rounded-full w-40 h-80 -translate-y-[370px] translate-x-1 bg-gradient-to-b from-bright-orange from-20% to-regal-blue to-80% blur-2xl dark:opacity-20"></div>
              </div>

              <div className="w-[11.5vw] h-[360px] -translate-y-[263.5px] ml-5 bg-gray-100 dark:bg-slate-950 overflow-hidden">
                <p className="xl:pt-[265px] md:pt-[280px] font-extralight text-slate-950 dark:text-white text-center xl:text-5xl lg:text-4xl md:text-3xl">
                  95%
                </p>
                <p className="font-mono text-slate-950 dark:text-white text-center xl:text-xl lg:text-base md:text-xs">
                  Communication
                </p>
                <div className="border-0 rounded-full w-40 h-80 -translate-y-[370px] translate-x-1 bg-gradient-135 from-bright-orange from-20% to-regal-blue to-80% blur-2xl dark:opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full h-[2px] mx-auto border-0 bg-gray-300" />
      </div>

      <div className="bg-gray-100">
        <SectionTitle>CORE VALUES</SectionTitle>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 pb-20 -mt-10">
          <div className="xl:pl-16 xl:-mr-16 py-8">
            <IconBox
              icon="innovate2.svg"
              title="Innovation"
              desc="I'm dedicated to staying ahead in the ever-evolving tech landscape
              by continuously learning and exploring new ideas. Embracing
              innovation drives me to push boundaries and deliver cutting-edge
              solutions."
            />
          </div>

          <div className="py-8">
            <IconBox
              icon="learn2.svg"
              title="Continuous Learning"
              desc="I'm committed to continuous self-improvement and skill
              development, always eager to take on new challenges and master
              emerging technologies. This drive ensures I remain adaptable and
              ready to excel in any environment."
            />
          </div>

          <div className="xl:pr-16 xl:-ml-16 py-8">
            <IconBox
              icon="quality2.svg"
              title="Quality"
              desc="I take pride in delivering high-quality work, from writing clean,
              efficient code to ensuring every project meets the highest
              standards. My attention to detail reflects my commitment to
              excellence in every aspect of my work."
            />
          </div>

          <div className="xl:pl-16 xl:-mr-16 py-8">
            <IconBox
              icon="trust2.svg"
              title="Integrity"
              desc="I approach my work with honesty and integrity, ensuring that
              transparency and accountability are at the core of everything I
              do. Trustworthiness is a value I uphold in all my professional
              endeavors."
            />
          </div>

          <div className="py-8">
            <IconBox
              icon="collab2.svg"
              title="Collaboration"
              desc="I believe that effective teamwork and clear communication are
              essential for achieving success, whether collaborating within a
              team or contributing to open-source projects. In my personal
              experience, cooperation and shared goals drive the best outcomes."
            />
          </div>

          <div className="xl:pr-16 xl:-ml-16 py-8">
            <IconBox
              icon="creative2.svg"
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
