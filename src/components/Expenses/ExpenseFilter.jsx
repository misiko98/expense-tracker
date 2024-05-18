const ExpenseFilter = ({ selected, years, onFilter }) => {
  const sortedYears = [...years].sort((a, b) => b - a);

  return (
    <div id="expense-filter" className="mb-4">
      <div id="filter-control" className="flex justify-between items-center">
        <label className="font-semibold ">Filter by Year</label>
        <select
          className="text-stone-500 px-2 py-1 min-[600px]:px-4 min-[600px]:py-2 rounded-md font-bold"
          value={selected}
          onChange={(e) => onFilter(e.target.value)}
        >
          {sortedYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
