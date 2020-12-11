import react from "react";
import reactDOM from "react-dom";
//import "./index.css";
import Manu from "./Manu";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { BrowserRouter, Route } from 'react-router-dom';

reactDOM.render(
  <>
    <BrowserRouter>
      <Manu/>
      <switch>
      <Route exact path = '/' component = {Home}/>
      <Route exact path = '/about' component = {About}/>
      <Route exact path = '/Contact' component = {Contact}/>
      </switch>
    </BrowserRouter>
    
  </>,
  document.getElementById("root")
);
