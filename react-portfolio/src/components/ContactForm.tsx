import React, { useState } from "react";

interface ContactFormData {
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    email: "",
    subject: "",
    message: "",
  });
  // const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Send formData to the backend
    // setStatus("Sending...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // setStatus("Message sent successfully!");
      setFormData({ email: "", subject: "", message: "" });
      console.log("Form submitted:", formData);
    } else {
      // setStatus("An error occurred, please try again.");
      console.log("Error submitting form:", formData);
    }
  };

  return (
    <div className="2xl:px-[11vw] xl:px-[9vw] lg:px-[7vw] md:px-[15vw] sm:px-[10vw] px-[5vw] py-10 bg-transparent font-myFont">
      <form onSubmit={handleSubmit}>
        <div className="lg:w-1/2 w-full inline-block lg:pr-10 -translate-y-[17px]">
          <label className="block lg:mb-4 text-lg font-medium text-dark dark:text-white">
            Name
            <input
              className="shadow-sm bg-white border border-dark text-dark text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-light dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              type="text"
              placeholder="John Doe"
              name="name"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </label>

          <label className="block text-lg font-medium text-dark dark:text-white pt-[19px]">
            Email
            <input
              className="shadow-sm bg-white border border-dark text-dark text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-light dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              type="email"
              placeholder="john.smith@email.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="lg:w-1/2 w-full lg:inline-block">
          <label className="block text-lg font-medium text-dark dark:text-white">
            Message
            <textarea
              id="message"
              rows={5}
              className="block p-2.5 w-full text-lg text-dark bg-white rounded-lg shadow-sm border border-dark focus:ring-primary-500 focus:border-primary-500 dark:bg-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-light dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
             />
          </label>
        </div>

        {/* <button type="submit">Send</button> 
         Do I Need to include type="submit"? */}
        <div className="lg:place-self-end place-self-center max-lg:pt-10">
          <button type="submit"
            className="transform hover:scale-[1.15] transition duration-200 ease-in-out relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-md font-bold hover:text-light text-dark dark:text-white rounded-lg group 
            bg-gradient-135 from-bright-orange from-20% to-regal-blue to-80% group-hover:from-bright-orange group-hover:to-regal-blue"
          >
            <span
              className="relative w-40 py-2.5 transition-all ease-in duration-200 
          bg-white dark:bg-dark2 rounded-md group-hover:bg-opacity-0"
            >
              Send Email
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
