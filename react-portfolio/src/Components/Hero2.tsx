interface Props {
  title: string;
  desc: string;
}

export default function Hero2({ title, desc }: Props) {
  return (
    <>
      <div className="relative isolate px-6 lg:pt-14 lg:pb-0 pt-24 pb-10 lg:px-8 bg-gray-950 shadow-lg shadow-gray-900">
        <div
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative aspect-[1155/678] translate-x-1/2 rotate-[30deg] bg-gradient-to-l from-[#ff4500] to-[#0047ff] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="grid max-w-screen-2xl px-8 py-8 mx-auto lg:px-16 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="hidden -z-10 lg:col-span-5 lg:flex lg:-ml-[7%] lg:pt-0 lg:mt-16 md:-mb-16 xl:h-[33vw] lg:h-[30vw] xl:w-[50vw] lg:w-[45vw]">
            <img src="about-dawson.png" alt="Dawson Adams Photo"></img>
          </div>
          {/* <div className="hidden -z-10 lg:col-span-5 lg:flex lg:ml-20 lg:pt-16 lg:-mb-16">
            <img src="dawson2.png" alt="Dawson Adams Photo"></img>
          </div>
          <div className="hidden absolute -left-[16px] top-[185px] -z-20 lg:h-[478px] lg:w-[768px] lg:flex">
            <img src="code.png"></img>
          </div> */}
          <div className="lg:ml-20 place-self-center text-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl xl:text-8xl dark:text-white">
              {title}
            </h1>
            <p className="max-w-2xl font-light text-justify text-gray-500 lg:mb-8 md:text-lg lg:text-base xl:text-xl dark:text-gray-400">
              {desc}
            </p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 -translate-x-[700px] translate-y-16 -z-30 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div className="relative aspect-[1155/378] -translate-x-1/2 bg-gradient-to-r from-[#0047ff] to-[#ff4500] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>
    </>
  );
}
