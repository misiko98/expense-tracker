import Card from '../UI/Card';
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {
  return (
    <Card
      id="new-expense"
      className="bg-[#a892ee] p-4 w-[50rem] max-w-[95%] mx-auto my-8"
    >
      <ExpenseForm />
    </Card>
  );
};

export default NewExpense;
