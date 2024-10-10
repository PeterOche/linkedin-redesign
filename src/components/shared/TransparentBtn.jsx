const TransparentBtn = ({ children, className = "" }) => {
  return (
    <button
      className={`rounded bg-[#FFFFFF] border border-[#0275B1] text-[#0275B1] font-semibold py-2 px-8 ${className}`}
    >
      {children}
    </button>
  );
};

export default TransparentBtn;
