import "./style.css";

export function Input({ label, type, name, placeholder, onChange }) {
  return (
    <label htmlFor={name}>
      {label}
      <input
        min="0"
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required
      ></input>
    </label>
  );
}
