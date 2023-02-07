import "./style.css";

import { Button } from "../button";

export function Card({ description, value, type, onClick }) {
  return (
    <li className={type === "Entrada" ? "card in" : "card out"}>
      <div>
        <h3>{description}</h3>
        <span>
          <p>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(value)}
          </p>
          <Button onClick={onClick} className="trash" />
        </span>
      </div>
      <small>{type}</small>
    </li>
  );
}
