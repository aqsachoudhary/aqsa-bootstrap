import { Switch, Route, Router } from "react-router-dom";

import "./App.css";
import MainLayOut from "./components/LayOut/MainLayOut";
import SignUp from "./modules/SignUp";
import Login from "./modules/Login";
import FormsPage from "./modules/Form/FormsPage";
import HomePage from "./modules/Home/HomePage";
import AboutPage from "./modules/About/AboutPage";
import ServicePage from "./modules/Servicies/ServicePage";
import TeamPage from "./modules/Team/TeamPage";
import ContactUs from "./modules/ContacsUs/ContactUs";
import Portfolio from "./modules/Portfolio/Portfolio";
import history from "./@history";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <MainLayOut>
          <Route exact path="/formpage" component={FormsPage} />
          <Route exact path="/homepage" component={HomePage} />
          <Route exact path="/aboutpage" component={AboutPage} />
          <Route exact path="/servicepage" component={ServicePage} />
          <Route exact path="/teampage" component={TeamPage} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/" component={HomePage} />
        </MainLayOut>
      </Switch>
    </Router>
  );
}

export default App;
