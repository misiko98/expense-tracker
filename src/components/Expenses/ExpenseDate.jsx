const ExpenseDate = ({ date }) => {
  const locale = 'en-US';
  const dateObject = new Date(date);

  const formatDate = (options) => dateObject.toLocaleString(locale, options);

  const month = formatDate({ month: 'long' });
  const year = formatDate({ year: 'numeric' });
  const day = formatDate({ day: '2-digit' });

  return (
    <div
      id="expense-date"
      className=" flex flex-col justify-center items-center w-[5.5rem] h-[5.5rem] bg-[#2a2a2a] text-white border border-[#ececec] rounded-xl"
    >
      <div id="expense-date__month" className="font-bold text-xs mb-1">
        {month}
      </div>
      <div id="expense-date__year" className="text-xs">
        {year}
      </div>
      <div id="expense-date__day" className="text-2xl font-bold">
        {day}
      </div>
    </div>
  );
};

export default ExpenseDate;
