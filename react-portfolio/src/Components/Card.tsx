import Button from "./Button";
import { Link } from "react-router-dom";

interface Props {
  imgSrc: string;
  title: string;
  desc: string;
}

function Card({ imgSrc, title, desc }: Props) {
  return (
    <div className="max-w-sm bg-white border-gray-200 rounded-xl shadow dark:bg-gray-950 dark:border-gray-950">
      <Link to="#">
        <img className="rounded-t-lg" src={imgSrc} alt="" />
      </Link>
      <div className="p-5">
        <Link to="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {desc}
        </p>
        <Link to="#">
          <Button> Read More </Button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
