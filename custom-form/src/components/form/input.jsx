const Input = ({ label, name, value, onChange, error, type = "text" }) => {
  const inputId = `input-${name}`;
  return (
    <div className="flex flex-col gap-1">
      <label className="text-neutral-700">{label}</label>
      <input
        id={inputId}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-200 p-2 rounded-md"
      />
      {error && (
        <div className="w-full flex items-center justify-end">
          <p className="text-xs text-red-500 font-semibold">{error}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
