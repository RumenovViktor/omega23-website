import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import NavigationA from './navigation/navigationA.js';

function App() {
  return <>
    <Router>
      <NavigationA />
    </Router>
  </>
}

export default App;
