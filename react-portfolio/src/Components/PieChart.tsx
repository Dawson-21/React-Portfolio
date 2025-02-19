export default function PieChart() {
  return (
    <>
      <div className="grid grid-cols-12 py-20 bg-light snap-start">
        <div className="col-span-12 ml-[16%] mr-[16%] md:hidden block">
          <img src="pie-chart.png" />
        </div>

        <div className="md:col-span-4 col-span-6 md:pl-0 sm:pl-5 text-dark">
          <h2 className="2xl:-mr-[2vw] xl:pt-24 lg:pt-20 md:pt-14 sm:-ml-0 -ml-3 text-center 2xl:text-8xl sm:text-5xl text-4xl font-style2 tracking-wide">
            Coder
          </h2>

          <ul className="text-left 2xl:pl-[13.3vw] xl:pl-[37%] lg:pl-[35%] md:pl-[31%] pl-[32%] lg:-mr-0 md:-mr-8 font-style1 text-3xl">
            <li>HTML5/CSS3</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>C/C++</li>
            <li>Java</li>
            <li>Python</li>
            <li className="md:text-2xl text-sm">Consulting Rubber Ducky</li>
          </ul>
        </div>

        <div className="2xl:mx-[5%] col-span-4 -mx-8 dark:md:block hidden">
          <img src="pie-chart.png" />
        </div>

        <div className="col-span-4 -mx-8 dark:hidden md:block hidden">
          <img src="pie-chart1.png" />
        </div>

        <div className="md:col-span-4 col-span-6 lg:pr-[15%] md:pr-[5%] md:pl-0 sm:pl-5 text-dark">
          <h2 className="xl:pt-24 lg:pt-20 md:pt-14 text-center sm:text-8xl text-4xl font-style2 tracking-wide">
            Designer
          </h2>

          <ul className="text-left 2xl:pl-[7.6vw] xl:pl-[28%] lg:pl-[23%] md:pl-[20%] sm:pl-[23%] pl-[26%] font-style1 text-3xl">
            <li>UI/UX Design</li>
            <li>User Engagement</li>
            <li>Responsive Design</li>
            <li>Interactive Elements</li>
            <li>Graphic Design</li>
          </ul>
        </div>
      </div>
    </>
  );
}
