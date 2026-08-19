import { PizzaType } from "../types/pizza.type";

 export default function Pizza({ pizza }: { pizza: PizzaType }) {
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