const ExpenseFilter = () => {
  return (
    <div id="expense-filter" className="mb-4">
      <div id="filter-control" className="flex justify-between items-center">
        <label className="font-semibold ">Filter by Year</label>
        <select className="text-stone-500 px-2 py-1 min-[600px]:px-4 min-[600px]:py-2 rounded-md font-bold">
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
