const BlueButton = ({ children, className }) => {
  return (
    <button
      className={`rounded bg-gradient-to-r from-[#0077B5] to-[#0E6795] hover:bg-gradient-to-l text-white font-semibold py-2 px-8 ${className}`}
    >
      {children}
    </button>
  );
};

export default BlueButton;
