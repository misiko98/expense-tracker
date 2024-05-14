import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ items }) => {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </ul>
  );
};

export default ExpenseList;
