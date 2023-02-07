import "./style.css";

export function Total({ value }) {
  return (
    <div className="total">
      <div>
        <h3>Valor Total:</h3>
        <p>{value}</p>
      </div>
      <small>O valor se refere ao saldo</small>
    </div>
  );
}
