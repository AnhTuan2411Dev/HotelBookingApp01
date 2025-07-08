import React from 'react';

interface CheckboxProps {
  id?: string;
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  labelClassName?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked = false,
  onChange,
  className = "",
  labelClassName = ""
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.checked);
    }
  };

  return (
    <label className={`flex gap-3 items-center cursor-pointer mt-2 text-sm ${className}`}>
      <input
        type="checkbox"
        id={id}
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

export default Checkbox;
