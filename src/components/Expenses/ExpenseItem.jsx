import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <li>
      <Card className="bg-[#4b4b4b] flex justify-between items-center p-2">
        <ExpenseDate date={date} />
        <div
          id="expense-item__description"
          className="flex flex-col-reverse flex-1 items-end gap-4"
        >
          <h2 className="text-base text-slate-300">{title}</h2>
          <p
            id="expense-item__price"
            className="bg-[#40005d] text-base font-bold text-stone-100 p-2 rounded-xl border border-white"
          >
            {amount}
          </p>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
