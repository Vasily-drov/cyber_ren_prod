
import './App.css';
import {NavLink} from "react-router-dom";





function App() {

  return (
    <div className="homeButton">
      <a className="btn btn-outline-dark mt-5" href="/" role="button">Home</a>
        <NavLink to="/portfolio">Portfolio </NavLink>
        <NavLink to="/portfolio">Pricing </NavLink>
        <NavLink to="/contact">Contact </NavLink>
    </div>
    
  );
}

export default App;
