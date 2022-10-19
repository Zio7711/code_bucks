import { Redirect, Route, Switch, useLocation } from "react-router-dom";

import AboutPage from "./components/AboutPage";
import { AnimatePresence } from "framer-motion";
import BlogPage from "./components/BlogPage";
import GlobalStyle from "./globalStyle";
import { LightTheme } from "./components/Themes";
import Main from "./components/Main";
import MySkillsPage from "./components/MySkillsPage";
import SoundBar from "./components/subComponents/SoundBar";
import { ThemeProvider } from "styled-components";
import WorkPage from "./components/WorkPage";

const App = () => {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={LightTheme}>
        <SoundBar />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <Redirect to="/code_bucks"></Redirect>
            </Route>
            <Route exact path="/code_bucks" component={Main} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/blog" component={BlogPage} />
            <Route exact path="/work" component={WorkPage} />
            <Route exact path="/skills" component={MySkillsPage} />
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
};

export default App;
