import Hero2 from "../Components/Hero2";
import PieChart from "../Components/PieChart";
import IconBox from "../Components/IconBox";

export default function About() {
  return (
    <>
      <Hero2
        title="About"
        desc="I'm passionate about all things code and love diving into new skills and challenges to keep growing my expertise. When I'm not wrestling with code, you can find me whipping up something tasty in the kitchen, exploring the great outdoors, or hanging out with my many pets."
      />
      <PieChart />
      <div className="bg-slate-100">
        <hr className="mb-8 w-full h-[4px] mx-auto border-0 rounded bg-gray-300" />
        {/* <h2 className="py-10 text-center text-5xl font-semibold text-gray-950 tracking-wide">
          Core Values
        </h2> */}
        <h2 className="xl:pt-20 lg:pt-15 pt-10 text-center font-mono lg:text-4xl md:text-3xl text-2xl text-gray-900 tracking-widest">
          CORE VALUES
        </h2>
        <hr className="2xl:w-[24%] lg:w-[23%] sm:w-[23%] w-[20%] h-[1px] mx-auto border-0 rounded bg-gray-700 2xl:translate-x-[90%] xl:translate-x-[100%] lg:translate-x-[110%] sm:translate-x-[115%] translate-x-[145%] lg:-translate-y-[19px] -translate-y-[17px]"></hr>
        <hr className="2xl:w-[24%] lg:w-[23%] sm:w-[23%] w-[20%] h-[1px] mx-auto border-0 rounded bg-gray-700 2xl:-translate-x-[90%] xl:-translate-x-[100%] lg:-translate-x-[110%] sm:-translate-x-[115%] -translate-x-[145%] -translate-y-[19px]"></hr>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 pb-20">
          <div className="xl:pl-16 xl:-mr-16 py-8">
            <IconBox
              icon="innovate.svg"
              title="Innovation"
              desc="I'm dedicated to staying ahead in the ever-evolving tech landscape
              by continuously learning and exploring new ideas. Embracing
              innovation drives me to push boundaries and deliver cutting-edge
              solutions."
            />
          </div>
          <div className="py-8">
            <IconBox
              icon="learn.svg"
              title="Continuous Learning"
              desc="I'm committed to continuous self-improvement and skill
              development, always eager to take on new challenges and master
              emerging technologies. This drive ensures I remain adaptable and
              ready to excel in any environment."
            />
          </div>
          <div className="xl:pr-16 xl:-ml-16 py-8">
            <IconBox
              icon="quality.svg"
              title="Quality"
              desc="I take pride in delivering high-quality work, from writing clean,
              efficient code to ensuring every project meets the highest
              standards. My attention to detail reflects my commitment to
              excellence in every aspect of my work."
            />
          </div>
          <div className="xl:pl-16 xl:-mr-16 py-8">
            <IconBox
              icon="trust.svg"
              title="Integrity"
              desc="I approach my work with honesty and integrity, ensuring that
              transparency and accountability are at the core of everything I
              do. Trustworthiness is a value I uphold in all my professional
              endeavors."
            />
          </div>
          <div className="py-8">
            <IconBox
              icon="collab.svg"
              title="Collaboration"
              desc="I believe that effective teamwork and clear communication are
              essential for achieving success, whether collaborating within a
              team or contributing to open-source projects. In my personal
              experience, cooperation and shared goals drive the best outcomes."
            />
          </div>
          <div className="xl:pr-16 xl:-ml-16 py-8">
            <IconBox
              icon="creative.svg"
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
