import Card from "./Card";

function Section1() {
  return (
    <>
      <div className="py-16 bg-gray-100">
        <h2 className="text-center font-mono text-lg text-gray-500 tracking-widest">
          SOME OF MY LATEST PROJECTS
        </h2>
        <hr className="w-96 h-[1px] mx-auto border-0 rounded bg-gray-300 translate-x-[370px] -translate-y-[14px]"></hr>
        <hr className="w-96 h-[1px] mx-auto border-0 rounded bg-gray-300 -translate-x-[370px] -translate-y-[15px]"></hr>

        <div className="inline-flex mx-48 gap-10 pt-10">
          <Card link={link1} imgSrc={img1} title={title1} desc={desc1} />

          <Card link={link2} imgSrc={img2} title={title2} desc={desc2} />

          <Card link={link3} imgSrc={img3} title={title3} desc={desc3} />
        </div>
      </div>
    </>
  );
}
export default Section1;

/* Props for Card 1 */
let link1 = "#";
let img1 = "img-2.png";
let title1 = "Portfolio Website Built With React & Tailwind CSS";
let desc1 =
  "My portfolio website was built from the ground up using only React.js and Tailwind CSS, with many reusable components and well written code.";

/* Props for Card 2 */
let link2 = "#";
let img2 = "img-1.png";
let title2 = "Project #2 Built With Java & SpringBoot";
let desc2 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

/* Props for Card 3 */
let link3 = "#";
let img3 = "img-1.png";
let title3 = "Project #3 Built With Python & Django";
let desc3 =
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat exercitation ullamco laboris.";
