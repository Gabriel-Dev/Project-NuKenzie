import "./style.css";

import img_home from "../../assets/img/Home.png";
import nu_kenzie from "../../assets/img/NuKenzie.png";
import { Button } from "../../components/button";

export function Home({ onClick }) {
  return (
    <div className="home">
      <main className="container">
        <section className="about">
          <img src={nu_kenzie} alt="nu kenzie" />
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          <Button onClick={onClick} className="button_primary" name="Iniciar" />
        </section>
        <section className="img_home">
          <img src={img_home} alt="retangulos" />
        </section>
      </main>
    </div>
  );
}
