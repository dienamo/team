import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const [displayResult, setDisplayResult] = useState({});

  const displayText = (resultText) => {
    setDisplayResult(resultText);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <HomePage displayText={displayText} />
        <ResultPage textToDisplay={displayResult} /> */}
          <Route
            path="/"
            element={<HomePage displayText={displayText} />}
          ></Route>
          <Route
            path="/result"
            element={<ResultPage textToDisplay={displayResult} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
