import { useState } from 'react';
import Button from '../UI/Button.jsx';
import Input from './Input.jsx';

const ExpenseForm = () => {
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
          value={345}
          onChange={handleInputChange}
        />
        <Input
          type="date"
          label="Date"
          value="2020-3-2"
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
