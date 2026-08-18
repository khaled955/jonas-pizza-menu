import { PizzaData } from "./data/data";
import { PizzaType } from "./types/pizza.type";

export default function App() {
  return (
    <main className="container">
      <Header />
      <Menu />
      <Footer />
    </main>
  );
}

function Pizza({ pizza }: { pizza: PizzaType }) {
  // Variables
  const { ingredients, name, photoName, price,soldOut } = pizza;
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>Price: {price}</span>
      </div>
    </li>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
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

function Footer() {
  // Variables
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">We are {isOpen ? "open" : "closed"} now</footer>
  );
}
