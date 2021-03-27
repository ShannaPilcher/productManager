import './App.css';
import { Router } from '@reach/router';
import Main from './view/main';
import Detail from './view/Detail';
import Update from './view/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/products/"/>
        <Detail path="/products/:id" />
        <Update path="/products/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
