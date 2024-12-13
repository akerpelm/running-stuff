import { ThemeProvider } from "@/components/theme-provider";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
