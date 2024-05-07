export default function ExpenseEfficiencyCard() {
  return (
    <div
      className="absolute cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out top-[424px] text-white left-[450px] bg-[#002E18] flex flex-col pt-[34px] pr-[30px] pb-[40px] pl-[36px] w-[290px] rounded-[28px]"
      style={{ boxShadow: '0px 23.63px 37.81px 0px #1E1E1E17' }}
    >
      <div className="flex gap-[11px]">
        <span
          className="text-[64px] font-[500] leading-[76px]"
          style={{ letterSpacing: '-3px' }}
        >
          $0.5
        </span>
        <div className="flex items-end flex-1 pb-[6px]">
          <span className="text-[22px] font-[500] text-[#A6A3A0] leading-[32px]">
            MILLION
          </span>
        </div>
      </div>
      <p className="text-[18px] font-[500] leading-[23px] text-[#CCCCCC]">
        Reduced client expenses by saving on hiring and employee costs.
      </p>
    </div>
  );
}
