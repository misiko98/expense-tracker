const Input = ({ label, onChange, inputError, ...props }) => {
  return (
    <div id="expense-control" className="flex flex-col">
      <label className="font-semibold block mb-2 text-stone-800">{label}</label>
      <input
        onChange={(e) => onChange(label.toLowerCase(), e.target.value)}
        {...props}
        className="p-2 rounded-md  border border-[#cccccc] focus:outline-none w-full  text-stone-600"
      />
      {inputError && <p className="text-red-500">{inputError}</p>}
    </div>
  );
};

export default Input;
