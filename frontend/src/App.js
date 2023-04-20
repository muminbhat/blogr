import React, { useState } from 'react'
import "./App.scss";
import Navbar from "./Components/Navbar";
import HomeScreen from "./Screens/HomeScreen";
import Footer from "./Components/Footer";
import BlogScreen from "./Screens/BlogScreen";
import LoadingBar from 'react-top-loading-bar'

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import BlogList from "./Screens/BlogList";

const App = () => {
  const [progress, setProgress] = useState(0)
    
    return (
      <Router>
      <Navbar />
      <LoadingBar
        height={2}
        color='#31d2f2'
        progress={progress}
      />
      <Routes>
        <Route exact path='/' element={<HomeScreen setProgress={setProgress}/>} />
        <Route exact path='/blog/:id' element={<BlogScreen setProgress={setProgress} />} />
        <Route exact path='/blog/' element={<BlogList setProgress={setProgress} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
