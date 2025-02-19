import { Link } from "react-router-dom";
import Button2 from "./Button2";

interface Props {
  img: string;
  title: string;
  desc?: string;
}

function Card({ img, title, desc }: Props) {
  return (
    <>
      <Link to="#">
        <img className="rounded-t-lg" src={img} alt="" />
      </Link>

      <div className="p-5 pb-2">
        <Link to="#">
          <h5 className=" font-style3 text-5xl dark:text-light text-dark">
            {title}
          </h5>
        </Link>

        <p className="mt-2 mb-4 font-style1 leading-none text-2xl dark:text-gray-400 text-gray-600">
          {desc}
        </p>

        <Link to="#">
          <div className="mb-2 hover:scale-[1.15] hover:translate-x-5 transition duration-500 ease-in-out font-style1 text-2xl">
            <Button2>Learn More</Button2>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Card;
