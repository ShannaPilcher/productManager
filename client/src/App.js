import './App.css';
import { Router } from '@reach/router';
import Main from './view/main';
import Detail from './view/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/products/"/>
        <Detail path="/products/:id" name="Bob"/>
      </Router>
    </div>
  );
}

export default App;
