export default function PieChart() {
  return (
    <>
      <div className="grid grid-cols-12 py-20 bg-slate-100">
        <div className="col-span-4">
          <h2 className="pt-32 text-center text-5xl font-semibold text-gray-950 tracking-wide">
            Coder
          </h2>
          <ul className="text-left pl-[187px] pt-4 font-mono text-lg">
            <li>HTML5/CSS3</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>C/C++</li>
            <li>Java</li>
            <li>Python</li>
            <li>Consulting Rubber Ducky</li>
          </ul>
        </div>
        <div className="col-span-4">
          <img src="pie-chart8.png" />
        </div>
        <div className="col-span-4 pr-14">
          <h2 className="pt-32 text-center text-5xl font-semibold text-gray-950 tracking-wide">
            Designer
          </h2>
          <ul className="text-left pl-[127px] pt-4 font-mono text-lg">
            <li>UI/UX Design</li>
            <li>User Engagement</li>
            <li>Responsive Design</li>
            <li>Interactive Elements</li>
            <li>Graphic Design</li>
            <li>Search Engine Optimization</li>
            <li>Making it *pop*</li>
          </ul>
        </div>
      </div>
    </>
  );
}
