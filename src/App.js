import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Quiz from "./component/Quiz";
import About from "./component/About";
import NotFound from "./component/NotFound";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="#/about">About</a>
          <a href="#/quiz">Quiz</a>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
