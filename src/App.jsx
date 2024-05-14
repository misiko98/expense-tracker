import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { DUMMY_EXPENSES } from './data/data';

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  return (
    <main>
      <NewExpense />
      <Expenses items={expenses} />
    </main>
  );
};

export default App;
