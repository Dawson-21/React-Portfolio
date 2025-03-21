interface Props {
  children: React.ReactNode;
}

function Button2({ children }: Props) {
  return (
    <button
      className="text-transparent bg-clip-text"
      style={{
        backgroundImage: "linear-gradient(to right, #ff4500, #0047ff)",
      }}
    >
      {children}
      <svg
        className="w-5 h-5 ml-2 -mr-1 inline-block"
        fill='rgb(0, 64, 227)'
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}

export default Button2;
