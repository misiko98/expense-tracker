import { useContext } from 'react';
import { ExpensesContext } from '../../contexts/ExpensesContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const { expenses } = useContext(ExpensesContext);
  return (
    <ul className="flex flex-col gap-4">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </ul>
  );
};

export default ExpenseList;
