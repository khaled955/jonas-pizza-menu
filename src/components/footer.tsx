import { useState } from "react";
import Order from "./order";
import { PizzaData } from "../data/data";

export default function Footer() {
  // States
  const [hour] = useState(() => new Date().getHours());
  // Variables
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  if (!PizzaData.length) return null;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}
