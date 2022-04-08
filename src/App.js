import { DarkTheme, LightTheme } from "./components/Themes";
import { Route, Switch } from "react-router-dom";

import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import GlobalStyle from "./globalStyle";
import Main from "./components/Main";
import MySkillsPage from "./components/MySkillsPage";
import { ThemeProvider } from "styled-components";
import WorkPage from "./components/WorkPage";

const App = () => {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={LightTheme}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/work" component={WorkPage} />
          <Route exact path="/skills" component={MySkillsPage} />
        </Switch>
      </ThemeProvider>
    </>
  );
};

export default App;
