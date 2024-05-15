import { useContext, useState } from 'react';
import { ExpensesContext } from '../../contexts/ExpensesContext.jsx';
import Button from '../UI/Button.jsx';
import Input from './Input.jsx';

const ExpenseForm = () => {
  const { onAddExpense } = useContext(ExpensesContext);

  const [enteredData, setEnteredData] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const handleInputChange = (identifier, value) => {
    setEnteredData((prevData) => {
      return {
        ...prevData,
        [identifier]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO: Validate inputs
    const expenseData = {
      ...enteredData,
    };

    onAddExpense(expenseData);

    //clear inputFields
    setEnteredData({ title: '', amount: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="form-controls" className="grid grid-cols-auto-fit gap-4">
        <Input
          type="text"
          label="Title"
          value={enteredData.title}
          onChange={handleInputChange}
        />
        <Input
          type="number"
          label="Amount"
          value={enteredData.amount}
          onChange={handleInputChange}
        />
        <Input
          type="date"
          label="Date"
          value={enteredData.date}
          onChange={handleInputChange}
        />
      </div>
      <div
        id="expense-actions"
        className="mt-4 flex justify-center min-[600px]:justify-end items-center"
      >
        <Button label="Cancel" type="button" />
        <Button label="Add Expense" type="submit" />
      </div>
    </form>
  );
};

export default ExpenseForm;
