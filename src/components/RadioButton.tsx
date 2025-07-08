import React from 'react';

interface RadioButtonProps {
  id?: string;
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  className?: string;
  labelClassName?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  name,
  value,
  label,
  checked = false,
  onChange,
  className = "",
  labelClassName = ""
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <label className={`flex gap-3 items-center cursor-pointer mt-2 text-sm ${className}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        className="accent-orange-500"
      />
      <span className={`font-light select-none ${labelClassName}`}>
        {label}
      </span>
    </label>
  );
};

export default RadioButton;
