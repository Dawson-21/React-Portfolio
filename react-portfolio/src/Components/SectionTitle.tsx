interface Props {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: Props) {
  return (
    <>
      <div className="grid grid-cols-3 pt-20 pb-10">
        <div className="border-t-2 border-dark md:mt-4 mt-[13px] xl:ml-[25%] lg:ml-[20%] md:ml-[16%] ml-[12%] xl:mr-0 lg:mr-4 mr-6 translate-x-[30%]"></div>

        <h2 className="sm:-mx-4 -mx-10 text-center font-style1 lg:text-3xl md:text-xl text-lg text-dark tracking-widest">
          {children}
        </h2>

        <div className="border-t-2 border-dark md:mt-4 mt-[13px] xl:mr-[25%] lg:mr-[20%] md:mr-[16%] mr-[12%] xl:ml-0 lg:ml-4 ml-6 -translate-x-[30%]"></div>
      </div>
    </>
  );
}
