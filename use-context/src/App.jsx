import Navbar from "./Navbar";
import Toolbar from "./Toolbar";
import { AuthProvider } from "./auth-context/AuthContext";
import { ThemeProvider } from "./theme-context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Toolbar />
        <Navbar />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
