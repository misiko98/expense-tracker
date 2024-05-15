import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { ExpenseContextProvider } from './contexts/ExpensesContext';

const App = () => {
  return (
    <main>
      <ExpenseContextProvider>
        <NewExpense />
        <Expenses/>
      </ExpenseContextProvider>
    </main>
  );
};

export default App;
