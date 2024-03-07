import './App.css';
import State from './Context/State';
import UseState from './Components/UseState';
import UseRef from './Components/UseRef';
import UseReducer from './Components/UseReducer';

function App() {
  return (
    <State>
      <div className="App">
        <div className="container">
          <h1>React Hooks</h1>
          <h3 className='mt-5'>useState, useEffect, useContext</h3>
          <UseState /><hr />
          <UseRef /><hr />
          <UseReducer />
        </div>
      </div>
    </State>
  );
}

export default App;
