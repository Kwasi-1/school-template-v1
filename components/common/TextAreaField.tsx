"use client";

const TextareaField = ({
  label,
  name,
  value,
  row,
  onChange,
  error,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error: boolean;
  placeholder: string;
  row: number;
}) => (
  <div>
    <label className="block text-sm font-semibold text-black">
      {label} <span className="text-[#890c25]">*</span>
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={row}
      className={`w-full border py-3 px-[20px] mt-3 ${
        error
          ? "border-red-500"
          : "border-[#ddd] focus:border-[#890c25] outline-0"
      }`}
    ></textarea>
    {error && (
      <p className="text-red-500 text-sm mt-1">This field is required.</p>
    )}
  </div>
);

export default TextareaField;
