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
          <h5 className="lg:text-2xl text-lg font-myFont font-bold tracking-tight text-dark dark:text-white">
            {title}
          </h5>
        </Link>

        <p className="mt-2 mb-2 font-myFont text-[13px] text-gray-600 dark:text-gray-300">
          {desc}
        </p>

        <Link to="#">
          <div className="mb-2 hover:scale-[1.15] hover:translate-x-5 transition duration-500 ease-in-out font-myFont">
            <Button2>Learn More</Button2>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Card;
