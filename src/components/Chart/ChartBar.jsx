const ChartBar = ({ label, value, maxValue }) => {
  let barFillHeight = '0%';

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + '%';
  }

  return (
    <div id="chart-bar" className="flex flex-col items-center h-full">
      <div
        id="chart-bar__inner"
        className="h-full w-full border border-[#313131] bg-[#c3b4f3] flex flex-col justify-end rounded-xl"
      >
        <div
          id="chart-bar__fill"
          style={{ height: barFillHeight }}
          className="bg-[#4826b9] w-full rounded-xl transition-all duration-300 ease-out"
        ></div>
      </div>
      <div
        id="chart-bar__label"
        className="font-semibold text-[0.5rem] text-center"
      >
        {label}
      </div>
    </div>
  );
};

export default ChartBar;
