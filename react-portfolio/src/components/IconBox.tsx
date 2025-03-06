interface Props {
  icon: string;
  alt: string;
  title: string;
  desc: string;
}

export default function IconBox({ icon, alt, title, desc }: Props) {
  return (
    <>
      <div className="transform hover:scale-[1.15] transition duration-200 ease-in-out w-[14%] xl:w-[18%] lg:w-[15%] md:w-[18%] sm:w-[11%] p-[5px] ml-[43%] xl:ml-[41%] lg:ml-[43%] md:ml-[41%] sm:ml-[45%] rounded-xl bg-gradient-135 from-bright-orange from-20% to-regal-blue to-80% group">
        <div className="rounded-[8px] py-[0.8vw] bg-white dark:bg-dark2 transition-all ease-in duration-200 group-hover:bg-opacity-0">
          <img
            src={icon}
            alt={alt}
            className="w-auto h-14 px-[20%] invert dark:invert-0"
          />
        </div>
      </div>
      <h3 className="py-3 text-center text-2xl font-myFont font-bold text-dark dark:text-light tracking-wide">
        {title}
      </h3>
      <p className="px-20 text-center font-light dark:text-light">{desc}</p>
    </>
  );
}
