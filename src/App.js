import "./App.css";
import AppNavigationBar from "./components/AppNavigationBar";
import Quiz from "./components/Quiz";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Helmet>
          <title>Quiz App</title>
        </Helmet>
        <AppNavigationBar />
        <Quiz />
      </Router>
    </div>
  );
}

export default App;
