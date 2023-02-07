import "./style.css";
import { Button } from "../button";
import nu_kenzie from "../../assets/img/NuKenzieBlack.png";

export function Header({ onClick }) {
  return (
    <header className="header">
      <div className="logo_and_button container">
        <img src={nu_kenzie} alt="nu kenzie" />
        <Button onClick={onClick} name="Inicio" />
      </div>
    </header>
  );
}
