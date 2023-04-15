import React from "react";
import "./App.scss";
import Navbar from "./Components/Navbar";
import HomeScreen from "./Screens/HomeScreen";
import Footer from "./Components/Footer";
import BlogScreen from "./Screens/BlogScreen";

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomeScreen />} />
        <Route exact path='/blog/' element={<BlogScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
