export default function Resume() {
  return (
    <>
      <div className="relative isolate px-6 lg:py-0 pt-32 py-10 lg:pt-14 lg:px-8 bg-light dark:bg-dark shadow-lg shadow-bright-orange/45 dark:shadow-gray-900 overflow-clip rounded-b-xl">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-gradient-to-l from-[#ff4500] to-[#0047ff] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="grid max-w-screen-2xl px-8 py-8 mx-auto lg:py-20 lg:grid-cols-12">
          <div className="lg:col-span-12">
            <h1 className="max-w-2xl mb-4 mx-auto lg:text-center font-myFont font-extrabold tracking-tight leading-none text-4xl sm:text-5xl lg:text-6xl dark:text-light">
              Resum&#232;
            </h1>
            <p className="max-w-2xl mx-auto font-light text-center text-gray-700 text-lg dark:text-gray-400">
              If my skills and experience align with what you're looking for,
              please feel free to reach out. I would love to connect and
              contribute to your team's success!
            </p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-30 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div className="relative aspect-[1155/378] -translate-x-1/2 bg-gradient-to-r from-[#0047ff] to-[#ff4500] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>
    </>
  );
}
