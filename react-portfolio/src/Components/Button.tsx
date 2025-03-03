interface Props {
  children: React.ReactNode;
  currentPage?: boolean
}

function Button({ children, currentPage }: Props) {
  const top = () => {
    window.scrollTo({
      top: 0,
    });
  };

  let style = currentPage ? "opacity-40" : "opacity-100";

  return (
    <>
      <button
        className={`${style} transform hover:scale-[1.15] transition duration-200 ease-in-out relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-bold hover:text-light text-dark dark:text-light rounded-lg group 
      bg-gradient-135 from-bright-orange from-20% to-regal-blue to-80% group-hover:from-bright-orange group-hover:to-regal-blue`}
        onClick={top}
      >
        <span
          className="relative w-[88px] py-2.5 transition-all ease-in duration-200 
          bg-light dark:bg-dark rounded-md group-hover:bg-opacity-0"
        >
          {children}
        </span>
      </button>
    </>
  );
}

export default Button;
