import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import reactLogo from './assets/react.svg';

import { counterActions } from './store';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type='button' onClick={incrementHandler}>+</button>
        <p className="card__count">{counter}</p>
        <button type='button' onClick={decrementHandler}>-</button>
      </div>
    </div>
  );
}

export default App;
