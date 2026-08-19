import { PizzaData } from "../data/data";
import Pizza from "./pizza";

 export default function Menu() {
  return (
    <section className="menu">
      <h2>Our menu</h2>
      <ul className="pizzas">
        {PizzaData.map((pizza) => (
          <Pizza key={pizza.name} pizza={pizza} />
        ))}
      </ul>
    </section>
  );
}