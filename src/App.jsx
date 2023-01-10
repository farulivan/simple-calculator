// import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
// import { counterActions } from './store';

function App() {
  // const dispatch = useDispatch();
  // const counter = useSelector(state => state.counter);

  // const incrementHandler = () => {
  //   dispatch(counterActions.increment());
  // };

  // const decrementHandler = () => {
  //   dispatch(counterActions.decrement());
  // };

  return (
    <div className="App">
      <div className='screen'>
        <p className='screen__history'>25 - 56 + 587</p>
        <div className='screen__main'>
          <p className='screen__equal'>=</p>
          <p className='screen__answer'>587</p>
        </div>
      </div>
      <div className='button'>
        <button className='button__clear blue' type='button'>CLEAR</button>
        <button className='yellow' type='button'>x</button>
        <button className='blue' type='button'>1</button>
        <button className='blue' type='button'>2</button>
        <button className='blue' type='button'>3</button>
        <button className='yellow' type='button'>+</button>
        <button className='blue' type='button'>4</button>
        <button className='blue' type='button'>5</button>
        <button className='blue' type='button'>6</button>
        <button className='yellow' type='button'>-</button>
        <button className='blue' type='button'>7</button>
        <button className='blue' type='button'>8</button>
        <button className='blue' type='button'>9</button>
        <button className='yellow' type='button'>%</button>
        <button className='yellow' type='button'>+/-</button>
        <button className='blue' type='button'>0</button>
        <button className='yellow' type='button'>.</button>
        <button className='yellow' type='button'>=</button>
      </div>


      {/* <div className="card">
        <button type='button' onClick={incrementHandler}>+</button>
        <p className="card__count">{counter}</p>
        <button type='button' onClick={decrementHandler}>-</button>
      </div> */}
    </div>
  );
}

export default App;
