const Button = ({ label, ...props }) => {
  return (
    <button
      className="px-4 py-2 min-[600px]:px-8 min-[600px]:py-4 border border-[#40005d] bg-[#40005d] text-stone-50 rounded-xl ml-2"
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
