import "./Header.css"
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function Header() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <>
    <header className="header">
      <h1>My App</h1>
      <button onClick={() =>
        setTheme(t => (t === "light" ? "dark" : "light"))
      }>
        Toggle theme
      </button>
    </header>
    </>

  );
}