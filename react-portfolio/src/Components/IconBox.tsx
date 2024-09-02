interface Props {
  icon: string;
  title: string;
  desc: string;
}

export default function IconBox({ icon, title, desc }: Props) {
  return (
    <>
      <div className="w-[14%] xl:w-[18%] lg:w-[15%] md:w-[18%] sm:w-[11%] py-[1.4vw] ml-[43%] xl:ml-[41%] lg:ml-[43%] md:ml-[41%] sm:ml-[45%] rounded-xl bg-gradient-135 from-bright-orange to-regal-blue">
        <img src={icon} className="w-auto h-14 px-[20%]" />
      </div>
      <h3 className="py-3 text-center text-2xl font-semibold text-gray-950 tracking-wide">
        {title}
      </h3>
      <p className="px-20 text-center">{desc}</p>
    </>
  );
}
