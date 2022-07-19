import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
//import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Home from "./components/Login";
import Dashboard from "./components/Dashboard";
import ThemeProvider from 'react-bootstrap/ThemeProvider'
function App() {
  return (
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
><div className="App">
      <Router>
        <Header></Header>
        <div className="container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        </div>
        {/* <Footer /> */}
      </Router>
    </div></ThemeProvider>
  );
}
  
export default App;