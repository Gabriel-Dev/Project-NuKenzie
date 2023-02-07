import "./style.css";

export function Button({ name, type, className, onClick }) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {name}
    </button>
  );
}
