import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={LightTheme}>App File</ThemeProvider>
    </>
  );
};

export default App;
