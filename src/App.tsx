import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyles } from "./theme/globals";
import { Products } from "./pages/products";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Products />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App;
