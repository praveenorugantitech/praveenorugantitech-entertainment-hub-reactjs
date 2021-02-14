import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import { Container } from "@material-ui/core";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/praveenorugantitech-entertainment-hub-reactjs" component={Trending} exact />
            <Route path="/praveenorugantitech-entertainment-hub-reactjs/movies" component={Movies} />
            <Route path="/praveenorugantitech-entertainment-hub-reactjs/series" component={Series} />
            <Route path="/praveenorugantitech-entertainment-hub-reactjs/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
