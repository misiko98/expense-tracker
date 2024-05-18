import { useContext, useEffect, useState } from 'react';
import { ExpensesContext } from '../../contexts/ExpensesContext';
import { getLatestExpenseYear } from '../../utils/dateUtils';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

const getYearString = (date) => new Date(date).getFullYear().toString();

const Expenses = () => {
  const { expenses } = useContext(ExpensesContext);
  const [years, setYears] = useState([]);
  const [filteredYear, setFilteredYear] = useState(getYearString(new Date()));

  // default the filter component to latest expense year
  useEffect(() => {
    setFilteredYear(getLatestExpenseYear(years));
  }, [years]);

  // generate unique years for filter component
  useEffect(() => {
    const uniqueYears = [
      ...new Set(expenses.map((expense) => getYearString(expense.date))),
    ];

    setYears(uniqueYears);
  }, [expenses]);

  const handleFilterChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => getYearString(expense.date) === filteredYear
  );

  return (
    <Card
      id="expenses"
      className="bg-[#1f1f1f] w-[50rem] max-w-[95%] p-4  mx-auto"
    >
      {years.length > 1 && (
        <ExpenseFilter
          years={years}
          selected={filteredYear}
          onFilter={handleFilterChange}
        />
      )}
      <ExpensesChart expenses={filteredExpenses} selected={filteredYear} />
      <ExpenseList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
