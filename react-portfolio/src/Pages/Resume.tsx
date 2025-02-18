import ContactForm from "../Components/ContactForm";
import Socials from "../Components/Socials";

export default function Resume() {
  return (
    <>
      {/****************** HERO SECTION ******************/}

      <div className="relative isolate px-6 lg:py-0 pt-32 py-10 lg:pt-14 lg:px-8 bg-light dark:bg-dark shadow-lg shadow-bright-orange/45 dark:shadow-gray-900 overflow-clip">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-gradient-to-l from-[#ff4500] to-[#0047ff] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="grid max-w-screen-2xl px-8 py-8 mx-auto fade-in lg:py-20 lg:grid-cols-12">
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

        {/****************** RESUME SECTION ******************/}

        <div className="place-self-center pb-10">
          <iframe
            src="https://moderndev.pro/wp-content/uploads/2025/01/AI-Software-Engineer.pdf"
            title="Dawson Adams Resume"
            height={1132}
            width={850}
          />
        </div>

        <div className="place-self-center pb-10">
          <Socials />
        </div>
      </div>

      {/****************** CONTACT FORM SECTION ******************/}

      <div className="md:pt-[8.5vw] pt-[12.5vw] md:pb-[4.5vw] pb-[6.5vw] bg-light">
        <div className="grid grid-cols-3">
          <div className="border-t-2 border-dark md:mt-3 mt-[10px] xl:ml-[25%] lg:ml-[20%] md:ml-[16%] ml-[12%] sm:mr-6 mr-10 xl:translate-x-[15%] lg:translate-x-[5%] md:translate-x-[15%]"></div>

          <h2 className="text-center font-myFont lg:text-lg md:text-base text-sm text-dark tracking-widest">
            SEND ME AN EMAIL
          </h2>

          <div className="border-t-2 border-dark md:mt-3 mt-[10px] xl:mr-[25%] lg:mr-[20%] md:mr-[16%] mr-[12%] sm:ml-6 ml-10 xl:-translate-x-[15%] lg:-translate-x-[5%] md:-translate-x-[15%]"></div>
        </div>

        <ContactForm />
      </div>
    </>
  );
}
