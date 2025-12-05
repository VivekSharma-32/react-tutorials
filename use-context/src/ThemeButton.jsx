import { useContext } from "react";
import { ThemeContext } from "./theme-context/ThemeContext";

const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      style={{
        background: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#333",
      }}
    >
      Current Theme: {theme}
    </button>
  );
};

export default ThemeButton;
