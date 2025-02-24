interface Props {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: Props) {
  return (
    <>
      <div className="grid grid-cols-3  pt-20 pb-5">
        <div className="border-t-2 border-gray-300 dark:border-white md:mt-3 mt-[10px] xl:ml-[25%] lg:ml-[20%] md:ml-[16%] ml-[12%] md:mr-4 sm:mr-6 mr-10 xl:translate-x-[15%] lg:translate-x-[5%]"></div>

        <h2 className="sm:-mx-4 -mx-10 text-center font-mono lg:text-lg md:text-base text-sm text-gray-500 dark:text-white tracking-widest">
          {children}
        </h2>

        <div className="border-t-2 border-gray-300 dark:border-white md:mt-3 mt-[10px] xl:mr-[25%] lg:mr-[20%] md:mr-[16%] mr-[12%] md:ml-4 sm:ml-6 ml-10 xl:-translate-x-[15%] lg:-translate-x-[5%]"></div>
      </div>
    </>
  );
}
