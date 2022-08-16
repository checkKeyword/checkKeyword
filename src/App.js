import LandingPage from './Components/Views/LandingPage/LandingPage.js';
import ResultPage from './Components/Views/ResultPage/ResultPage.js';
import {  BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>
          <Route path = '/' element = {<LandingPage/>} />
          <Route path = '/result' element = {<ResultPage/>} />
        </Routes>
      </Router>
    );
}

export default App;
