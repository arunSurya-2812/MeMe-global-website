
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Fabrics from "./components/Fabrics";
import Ecofriendly from "./components/Ecofriendly";
import Home from "./components/Home";
import Leathers from "./components/Leathers";
import Knits from "./components/Knits";
import Brands from "./components/Brands";
import Yarn from "./components/Yarn";
import Navboard from "./components/Navbard";
import Header from "./components/header";
import Fiber from "./components/Fiber";
import { Container } from "react-bootstrap";
import Footer from"./components/Footer"

export default function App() {
  return (
    <div className="App">
      <Container>
        <Router>
          <Header />
          <Navboard />
          <Route exact path="/" component={Home}></Route>
          <Route path="/Fiber" component={Fiber}></Route>
          <Route path="/Yarn" component={Yarn}></Route>
          <Route path="/Fabrics" component={Fabrics}></Route>
          
          <Route path="/Leathers" component={Leathers}></Route>
          <Route path="/Knits" component={Knits}></Route>
          <Route path="/Brands" component={Brands}></Route>
          <Route path="/Ecofriendly" component={Ecofriendly}></Route>
        </Router>
        <Footer/>
      </Container>
      
    </div>
  );
}
