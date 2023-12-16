import './App.css';
import Quiz from './components/Quiz';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Quiz App</title>
      </Helmet>
      <Quiz />
    </div>
  );
}

export default App;
