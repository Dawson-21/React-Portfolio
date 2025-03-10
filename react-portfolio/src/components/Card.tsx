import Button2 from "./Button2";

interface Props {
  img: string;
  alt: string;
  title: string;
  desc?: string;
  btn?: string;
  link?: string;
  newPage?: boolean;
}

function Card({ img, alt, title, desc, btn, link, newPage }: Props) {
  return (
    <>
      <a href={link ? link : "#"} target={newPage ? "_blank" : ""} rel="noreferrer" className="group">
        <img className="rounded-t-lg" src={img} alt={alt} />
      </a>

      <div className="p-5 pb-2">
        <h5 className="lg:text-2xl text-lg font-myFont font-bold tracking-tight text-dark dark:text-white">
          {title}
        </h5>

        <p className="mt-2 mb-2 font-myFont text-[13px] text-gray-600 dark:text-gray-300">
          {desc}
        </p>

        <a href={link ? link : "#"} target={newPage ? "_blank" : ""} rel="noreferrer" className="group">
          <div className="mb-2 hover:scale-[1.15] hover:translate-x-5 transition duration-500 ease-in-out font-myFont">
            <Button2>{btn ? btn : "Learn More"}</Button2>
          </div>
        </a>
      </div>
    </>    
  );
}

export default Card;
