import { useState } from "react";
import axios from "axios";

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null as string | null },
  });

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleServerResponse = (ok: boolean, msg: string) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e: {
    persist: () => void;
    target: { id: string; value: string };
  }) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/mqapapol",
      data: inputs,
    })
      .then(() => {
        // 'response' was a parameter but unused
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <>
      <div className="2xl:px-[11vw] xl:px-[9vw] lg:px-[7vw] md:px-[15vw] sm:px-[10vw] px-[5vw] py-10 bg-transparent font-myFont">
        <form onSubmit={handleOnSubmit}>
          <div className="lg:w-1/2 w-full inline-block lg:pr-10 -translate-y-[25px]">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-dark dark:text-white"
            >
              Name
            </label>
            <input
              className="shadow-sm bg-white border border-dark text-dark text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-light dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              id="name"
              type="name"
              placeholder="your name"
              name="name"
              onChange={handleOnChange}
              required
              value={inputs.name}
            />
            <label
              htmlFor="email"
              className="block text-lg font-medium text-dark dark:text-white pt-[27px]"
            >
              Email
            </label>
            <input
              className="shadow-sm bg-white border border-dark text-dark text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-light dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              id="email"
              type="email"
              placeholder="your email address"
              name="_replyto"
              onChange={handleOnChange}
              required
              value={inputs.email}
            />
          </div>
          <div className="lg:w-1/2 w-full lg:inline-block">
            <label
              htmlFor="message"
              className="block text-lg font-medium text-dark dark:text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Leave a message..."
              className="block p-2.5 w-full text-lg text-dark bg-white rounded-lg shadow-sm border border-dark focus:ring-primary-500 focus:border-primary-500 dark:bg-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-light dark:focus:ring-primary-500 dark:focus:border-primary-500"
              onChange={handleOnChange}
              required
              value={inputs.message}
            />
          </div>

          <div className="lg:place-self-end place-self-center max-lg:pt-10">
            <button
              type="submit"
              disabled={status.submitting}
              className="transform hover:scale-[1.15] transition duration-200 ease-in-out relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-md font-bold hover:text-light text-dark dark:text-white rounded-lg group 
              bg-gradient-135 from-bright-orange from-20% to-regal-blue to-80% group-hover:from-bright-orange group-hover:to-regal-blue"
            >
              <span
                className="relative w-40 py-2.5 transition-all ease-in duration-200 
                bg-white dark:bg-dark2 rounded-md group-hover:bg-opacity-0"
              >
                {/* Dynamically display button text based on status of form submission */}
                {!status.submitting
                  ? !status.submitted
                    ? "Submit"
                    : "Submitted"
                  : "Submitting..."}
              </span>
            </button>
          </div>
        </form>
      </div>

      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </>
  );
};
