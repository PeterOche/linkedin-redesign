const TransparentBtn = ({ children }) => {
  return (
    <button className="rounded bg-[#FFFFFF] border border-[#0275B1] text-[#0275B1] font-semibold py-2 px-8">
      {children}
    </button>
  );
};

export default TransparentBtn;
