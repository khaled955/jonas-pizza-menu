import { PizzaData } from "../data/data";
import Pizza from "./pizza";

export default function Menu() {
  return (
    <section className="menu">
      <h2>Our menu</h2>

      {PizzaData.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {PizzaData.map((pizza) => (
              <Pizza key={pizza.name} pizza={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </section>
  );
}
