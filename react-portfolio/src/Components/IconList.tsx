interface Props {
  img: string;
}

export default function IconList({ img }: Props) {
  return (
    <>
      <div className="transform hover:scale-[1.15] transition duration-200 ease-in-out w-[14%] xl:w-[13%] lg:w-[15%] md:w-[9%] sm:w-[11%] rounded-xl ml-[23%] xl:ml-[50%] lg:ml-[48%] md:ml-[63%] sm:ml-[51%] p-[3px] bg-gradient-135 from-bright-orange from-40% to-regal-blue to-60% group">
        <div className="rounded-[8px] py-[0.8vw] bg-white dark:bg-dark2 transition-all ease-in duration-200 group-hover:bg-opacity-0">
          <img
            src={img}
            className="w-auto h-8 px-[19%] inline-flex invert dark:invert-0"
          />
        </div>
      </div>
    </>
  );
}
