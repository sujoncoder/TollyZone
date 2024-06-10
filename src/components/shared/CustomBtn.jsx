const CustomBtn = ({ children, className, myStyle, onDisabled }) => {
  const disableBtnStyle =
    "bg-gray-200 py-2 px-4 text-slate-500 text-xl font-semibold cursor-not-allowed rounded-full mt-10 flex justify-evenly item-center";

  const disableBtn = onDisabled === true ? disableBtnStyle : `${myStyle}`;

  return (
    <button
      disabled={onDisabled}
      className={`${disableBtn} bg-blue-500 py-2 px-4 rounded text-slate-200 text-xl font-semibold duration-200 cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default CustomBtn;
