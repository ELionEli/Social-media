import type { FC } from "react";
import "./Input.css";

interface InputProps {
  id: string;
  value: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}

export const Input: FC<InputProps> = ({
  id,
  value,
  handleInputChange,
  label,
  placeholder,
  type = "text",
  required = false,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={handleInputChange}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};
