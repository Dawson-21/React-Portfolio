import ContactForm from "../components/ContactForm";
import Socials from "../components/Socials";
import SectionTitle from "../components/SectionTitle";

export default function Resume() {
  return (
    <>
      {/****************** HERO SECTION ******************/}

      <div className="relative isolate px-6 lg:py-0 pt-32 py-10 lg:pt-14 lg:px-8 bg-light dark:bg-dark shadow-lg shadow-bright-orange/45 dark:shadow-gray-900 overflow-clip">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-gradient-to-l from-[#ff4500] to-[#0047ff] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="grid max-w-screen-2xl px-4 py-8 mx-auto sm:px-8 fade-in lg:py-20 lg:grid-cols-12">
          <div className="lg:col-span-12">
            <h1 className="max-w-2xl mb-4 mx-auto lg:text-center font-myFont font-bold tracking-tight leading-none text-4xl sm:text-5xl lg:text-6xl dark:text-light">
              Resum&#232;
            </h1>
            <p className="max-w-2xl mx-auto font-myFont text-[15px] text-justify text-gray-600 lg:mb-8 md:mb-0 mb-6 text-lg dark:text-gray-400">
              If my skills and experience align with what you&#39;re looking
              for, please feel free to reach out. I would love to connect and
              contribute to your team&#39;s success!
            </p>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-30 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div className="relative aspect-[1155/378] -translate-x-1/2 bg-gradient-to-r from-[#0047ff] to-[#ff4500] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>

        {/****************** RESUMÉ SECTION ******************/}

        <div className="place-self-center pb-10 md:block hidden">
          <iframe
            src="https://moderndev.pro/wp-content/uploads/2025/03/Adams-Developer-3.pdf"
            title="Dawson Adams Resume"
            height={1132}
            width={850}
          />
        </div>

        <div className="place-self-center pb-10 md:hidden block">
          <a
            href="https://moderndev.pro/wp-content/uploads/2025/03/Adams-Developer-3.pdf"
            target="_blank"
            rel="noreferrer"
            className="transform hover:scale-[1.15] transition duration-300 ease-in-out relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-myFont text-dark font-extrabold hover:text-light dark:text-light rounded-lg group 
            bg-gradient-135 from-bright-orange from-20% to-regal-blue to-80% group-hover:from-bright-orange group-hover:to-regal-blue"
          >
            <span
              className="relative px-20 py-2.5 transition-all ease-in duration-300 
            bg-light dark:bg-slate-950 rounded-md group-hover:bg-opacity-0"
            >
              View Resume
            </span>
          </a>
        </div>

        <div className="place-self-center pb-10">
          <Socials />
        </div>
      </div>

      {/****************** CONTACT FORM SECTION ******************/}

      <div className="md:pb-32 pb-16 md:pt-10 bg-light dark:bg-dark2">
        <SectionTitle> SEND ME AN EMAIL </SectionTitle>
        <ContactForm />
      </div>
    </>
  );
}
