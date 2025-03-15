"use client";

const InputField = ({
  label,
  name,
  type = "text",
  error,
  placeholder,
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  placeholder?: string;
  [key: string]: any;
}) => (
  <div>
    <label className="block text-sm font-semibold text-black">
      {label} <span className="text-[#890c25]">*</span>
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`w-full border py-3 px-[20px] mt-3 focus:border-[#890c25] outline-0 ${
        error ? "border-red-500" : "border-[#ddd] "
      }`}
      {...rest}
    />
    {error && (
      <p className="text-red-500 text-sm mt-1">This field is required.</p>
    )}
  </div>
);

export default InputField;
