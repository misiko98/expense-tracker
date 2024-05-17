import { createContext, useState } from 'react';
import { DUMMY_EXPENSES } from '../data/data';
import { objectIsEmpty } from '../utils/objectutils';
import { validate } from '../utils/validation';

export const ExpensesContext = createContext({
  expenses: [],
  errors: {},
  onAddExpense: () => {},
});

export const ExpenseContextProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    expenses: DUMMY_EXPENSES,
    errors: {},
  });

  const handleAddExpense = (enteredExpense) => {
    //simple form validation
    const errors = validate(enteredExpense);

    //render errors
    setAppState((prevState) => {
      return {
        ...prevState,
        errors,
      };
    });

    // guard Clause => No errors
    if (!objectIsEmpty(errors)) return;

    const expenseId = Math.random().toFixed(3).toString();
    const { amount: expenseAmount } = enteredExpense;

    const newExpense = {
      id: expenseId,
      ...enteredExpense,
      //store type Number amount
      amount: +expenseAmount,
    };

    // Add new Expense
    setAppState((prevState) => {
      return {
        ...prevState,
        expenses: [...prevState.expenses, newExpense],
      };
    });
  };

  const ctxValue = {
    expenses: appState.expenses,
    errors: appState.errors,
    onAddExpense: handleAddExpense,
  };

  return (
    <ExpensesContext.Provider value={ctxValue}>
      {children}
    </ExpensesContext.Provider>
  );
};
