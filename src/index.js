import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Portfolio,  About,AboutExt, Contact, WebContent, Blockchain, WebDevelopment, Home, PortfolioExt, PortfolioBlockchain} from './components'



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
    <Router>
    <App />
      <Routes>
          <Route path="/portfolio/webcontent" element={<WebContent />} />
          <Route path="/portfolio/Blockchain" element={<Blockchain />} />
          <Route path="/portfolio/webdevelopment" element={<WebDevelopment />} />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolioext" element={<PortfolioExt />} />


          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/aboutext" element={<AboutExt />} />
          <Route path="/" element={<Home />} />
      </Routes>

    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
