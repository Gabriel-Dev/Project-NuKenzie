import { useState } from "react";
import { Button } from "../../components/button";
import { Card } from "../../components/card";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Total } from "../../components/total";
import { Select } from "../../components/select";
import "./style.css";

export function Dashboard({ onClick }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const [insert_list, setInsert_list] = useState([]);
  const [filter, setFilter] = useState(insert_list);
  const [color, setColor] = useState("Todos");

  return (
    <div className="dashboard">
      <Header onClick={onClick} />
      <main className="container">
        <section className="insert">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const insert = {
                id: insert_list.length,
                description: description,
                value: value,
                type: type,
              };
              setInsert_list([...insert_list, insert]);
              setFilter([...insert_list, insert]);
            }}
          >
            <Input 
              onChange={(event) => {setDescription(event.target.value);}}
              type="text"
              label="Descrição"
              name="description"
              placeholder="Digite aqui sua descrição"
            />
            <small>Ex: Compra de roupas</small>
            <div>
              <Input
                onChange={(event) => {setValue(event.target.value);}}
                type="number"
                label="Valor"
                name="value"
                placeholder="R$"
              />
              <Select 
              onChange={(event) => {setType(event.target.value);}}/>
            </div>
            <Button
              type="submit"
              name="Inserir valor"
              className="button_primary"
            />
          </form>
          <Total
            value={new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(insert_list.reduce
              ((total, { type, value }) => type === "Despesa" ? total - parseInt(value) :
              total + parseInt(value),0)
              )}
          />
        </section>
        <section className="summary">
          <div>
            <h3>Resumo financeiro</h3>
            <nav className="nav_buttons">
              <Button
                onClick={() => {setFilter(insert_list);
                  setColor("Todos");
                }}
                name="Todos"
                className={color === "Todos" ? "button_primary" : ""}
              />
              <Button
                onClick={() => {
                  setFilter(
                    insert_list.filter(({ type }) => type === "Entrada")
                  );
                  setColor("Entradas");
                }}
                name="Entradas"
                className={color === "Entradas" ? "button_primary" : ""}
              />
              <Button
                onClick={() => {
                  setFilter(
                    insert_list.filter(({ type }) => type === "Despesa")
                  );
                  setColor("Despesas");
                }}
                name="Despesas"
                className={color === "Despesas" ? "button_primary" : ""}
              />
            </nav>
          </div>
          <ul className="card_list">
            {filter.length === 0 ? (
              <h2 className="no_insert">Nenhum valor inserido</h2>
            ) : (
              filter.map(({ id, description, value, type }) => (
                <Card
                  onClick={() => {
                    setInsert_list(insert_list.filter((e) => e.id !== id));
                    setFilter(filter.filter((e) => e.id !== id));
                  }}
                  description={description}
                  value={value}
                  type={type}
                />
              ))
            )}
          </ul>
        </section>
      </main>
    </div>
  );
}
