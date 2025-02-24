export default function PieChart() {
  return (
    <>
      <div className="grid grid-cols-12 py-20 bg-light dark:bg-dark2 snap-start">
        <div className="col-span-12 ml-[30%] mr-[30%] dark:block dark:md:hidden hidden">
          <img src="media/pie-chart.png" />
        </div>
        <div className="col-span-12 ml-[30%] mr-[30%] md:hidden block dark:hidden">
          <img src="media/pie-chart1.png" />
        </div>

        <div className="md:col-span-4 col-span-6 md:pl-0 sm:pl-5 text-dark dark:text-white">
          <h2 className="2xl:-mr-[2vw] xl:pt-24 lg:pt-20 md:pt-14 sm:-ml-0 -ml-3 text-center 2xl:text-6xl sm:text-5xl text-4xl font-myFont font-bold tracking-wide">
            Coder
          </h2>

          <ul className="text-left 2xl:pl-[13.3vw] xl:pl-[37%] lg:pl-[35%] md:pl-[31%] pl-[32%] pt-4 lg:-mr-0 md:-mr-8 font-light xl:text-lg lg:text-base">
            <li>HTML5/CSS3</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>C/C++</li>
            <li>Java</li>
            <li>Python</li>
            <li className="md:text-base text-sm">Consulting Rubber Ducky</li>
          </ul>
        </div>

        <div className="2xl:mx-[5%] col-span-4 -mx-8 dark:md:block hidden">
          <img src="media/pie-chart.png" />
        </div>

        <div className="col-span-4 -mx-8 dark:hidden md:block hidden">
          <img src="media/pie-chart1.png" />
        </div>

        <div className="md:col-span-4 col-span-6 lg:pr-[15%] md:pr-[5%] md:pl-0 sm:pl-5 text-dark dark:text-white">
          <h2 className="xl:pt-24 lg:pt-20 md:pt-14 text-center 2xl:text-6xl sm:text-5xl text-4xl font-myFont font-bold tracking-wide">
            Designer
          </h2>

          <ul className="text-left 2xl:pl-[7.5vw] xl:pl-[28%] lg:pl-[23%] md:pl-[20%] sm:pl-[23%] pl-[26%] pt-4 font-light xl:text-lg lg:text-base">
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
