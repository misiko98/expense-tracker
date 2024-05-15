import { createContext, useState } from 'react';
import { DUMMY_EXPENSES } from '../data/data';

export const ExpensesContext = createContext({
  expenses: [],
  onAddExpense: () => {},
});

export const ExpenseContextProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const handleAddExpense = (enteredExpense) => {
    setExpenses((prevExpenses) => {
      const expenseId = Math.random().toFixed(3).toString();
      const newExpense = {
        id: expenseId,
        ...enteredExpense,
      };

      return [...prevExpenses, newExpense];
    });
  };

  const ctxValue = {
    expenses,
    onAddExpense: handleAddExpense,
  };

  return (
    <ExpensesContext.Provider value={ctxValue}>
      {children}
    </ExpensesContext.Provider>
  );
};
