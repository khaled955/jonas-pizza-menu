export default function Footer() {
  // Variables
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">We are {isOpen ? "open" : "closed"} now</footer>
  );
}
