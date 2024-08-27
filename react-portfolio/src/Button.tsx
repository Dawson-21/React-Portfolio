interface Props {
  children: React.ReactNode;
}

function Button({ children }: Props) {
  return (
    <>
      <button
        className="transform hover:scale-[1.15] transition duration-500 ease-in-out relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-950 rounded-lg group 
      bg-gradient-135 from-bright-orange from-20% to-regal-blue to-80% group-hover:from-bright-orange from-20% group-hover:to-regal-blue to-80% 
      hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-orange-200 dark:focus:ring-orange-800"
      >
        <span
          className="relative px-5 py-2.5 transition-all ease-in duration-75 
        bg-white dark:bg-gray-950 rounded-md group-hover:bg-opacity-0"
        >
          {children}
        </span>
      </button>
    </>
  );
}

export default Button;
