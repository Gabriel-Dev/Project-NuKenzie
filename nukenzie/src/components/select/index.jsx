import "./style.css";

export function Select({onChange}) {
  return (
    <label htmlFor="type">
      Tipo de Valor
      <select
        onChange={onChange}
        name="type"
        required
      >
        <option value=""></option>
        <option value="Entrada">Entrada</option>
        <option value="Despesa">Despesa</option>
      </select>
    </label>
  );
}
