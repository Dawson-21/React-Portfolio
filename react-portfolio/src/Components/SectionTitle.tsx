import { useLocation } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: Props) {

  const location = useLocation();
  const isAbout = location.pathname === '/about';
  const isContact = location.pathname === '/contact';
  const isResume = location.pathname === '/resume';

  let spacer1 = isAbout ? 'md:mr-5 mr-6 translate-x-[40%] xl:ml-[5%] lg:ml-[10%] md:ml-[16%] ml-[12%]' : 'md:mr-4 sm:mr-6 mr-10 xl:translate-x-[15%] lg:translate-x-[5%] xl:ml-[25%] lg:ml-[20%] md:ml-[16%] ml-[12%]';
  let spacer2 = isAbout ? 'md:ml-5 ml-6 -translate-x-[40%] xl:mr-[5%] lg:mr-[10%] md:mr-[16%] mr-[12%]' : 'md:ml-4 sm:ml-6 ml-10 xl:-translate-x-[15%] lg:-translate-x-[5%] xl:mr-[25%] lg:mr-[20%] md:mr-[16%] mr-[12%]';
  spacer1 = isContact || isResume ? '2xl:mr-5 xl:mr-10 lg:mr-12 mr-6 xl:translate-x-[31%] lg:translate-x-[25%] md:translate-x-[30%] translate-x-[10%] 2xl:ml-[5%] lg:ml-[0%] sm:ml-[25%] ml-[10%]': spacer1;
  spacer2 = isContact || isResume ? '2xl:ml-5 xl:ml-10 lg:ml-12 ml-6 xl:-translate-x-[31%] lg:-translate-x-[25%] md:-translate-x-[30%] -translate-x-[10%] 2xl:mr-[5%] lg:mr-[0%] sm:mr-[25%] mr-[10%]': spacer2;

  return (
    <>
      <div className="grid grid-cols-3  pt-20 pb-5">
        <div className={`border-t-2 border-gray-300 dark:border-white md:mt-3 mt-[10px] ${spacer1}`}></div>

        <h2 className="sm:-mx-4 -mx-10 text-center font-mono lg:text-lg md:text-base text-sm text-gray-500 dark:text-white tracking-widest">
          {children}
        </h2>

        <div className={`border-t-2 border-gray-300 dark:border-white md:mt-3 mt-[10px] ${spacer2}`}></div>
      </div>
    </>
  );
}
