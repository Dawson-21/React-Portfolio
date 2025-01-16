interface Props {
  img: string;
}

export default function IconList({ img }: Props) {
  return (
    <>
      <div className="w-[14%] xl:w-[13%] lg:w-[15%] md:w-[9%] sm:w-[11%] py-[0.8vw] ml-[23%] xl:ml-[50%] lg:ml-[48%] md:ml-[63%] sm:ml-[51%] rounded-xl bg-gradient-135 from-bright-orange from-20% to-regal-blue to-80%">
        <img src={img} className="w-auto h-8 px-[15%] inline-flex" />
      </div>
    </>
  );
}
