"use client";

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error: boolean;
  placeholder: string;
}) => (
  <div>
    <label className="block text-sm font-semibold text-black">
      {label} <span className="text-[#890c25]">*</span>
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full border py-3 px-[20px] mt-3 ${
        error
          ? "border-red-500"
          : "border-[#ddd] focus:border-[#890c25] outline-0"
      }`}
    />
    {error && (
      <p className="text-red-500 text-sm mt-1">This field is required.</p>
    )}
  </div>
);

export default InputField;