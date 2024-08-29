import Button from "./Button";

interface Props {
  link: string;
  imgSrc: string;
  title: string;
  desc: string;
}

let buttonLink = "#";

function Card({ link, imgSrc, title, desc }: Props) {
  return (
    <div className="max-w-sm bg-white border-gray-200 rounded-xl shadow dark:bg-gray-950 dark:border-gray-950">
      <a href={link}>
        <img className="rounded-t-lg" src={imgSrc} alt="" />
      </a>
      <div className="p-5">
        <a href={link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {desc}
        </p>
        <Button link={buttonLink}> Read More </Button>
      </div>
    </div>
  );
}

export default Card;
