import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

const Expenses = () => {
  return (
    <Card
      id="expenses"
      className="bg-[#1f1f1f] w-[50rem] max-w-[95%] p-4  mx-auto"
    >
      <ExpenseFilter />
      <ExpensesChart />
      <ExpenseList />
    </Card>
  );
};

export default Expenses;
