import { useContext, useEffect, useState } from 'react';
import { ExpensesContext } from '../../contexts/ExpensesContext.jsx';
import { objectIsEmpty } from '../../utils/objectutils.js';
import Button from '../UI/Button.jsx';
import Input from './Input.jsx';

const ExpenseForm = () => {
  const { errors, onAddExpense } = useContext(ExpensesContext);
  const [enteredData, setEnteredData] = useState({
    title: '',
    amount: '',
    date: '',
  });

  useEffect(() => {
    if (objectIsEmpty(errors)) {
      setEnteredData({ title: '', amount: '', date: '' });
    }
  }, [errors]);

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

    const expenseData = {
      ...enteredData,
    };
    onAddExpense(expenseData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="form-controls" className="grid grid-cols-auto-fit gap-4">
        <Input
          type="text"
          label="Title"
          value={enteredData.title}
          onChange={handleInputChange}
          inputError={errors.title}
        />
        <Input
          type="number"
          label="Amount"
          value={enteredData.amount}
          onChange={handleInputChange}
          inputError={errors.amount}
        />
        <Input
          type="date"
          label="Date"
          value={enteredData.date}
          onChange={handleInputChange}
          inputError={errors.date}
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
