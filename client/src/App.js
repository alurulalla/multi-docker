import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Fib from "./fib";
import OtherPage from "./otherPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/" style={{ padding: 20 }}>
            Home
          </Link>
          <Link to="/otherpage" style={{ padding: 20 }}>
            Other Page
          </Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
