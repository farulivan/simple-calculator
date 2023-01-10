// import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import Button from './components/Button';
import Screen from './components/Screen';
// import { counterActions } from './store';

const calButtons = [
  ['CLEAR', 'x'],
  [1, 2, 3, '+'],
  [4, 5, 6, '-'],
  [7, 8, 9, '%'],
  ['+/-', 0, '.', '='],
];

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
      <Screen history={25-56+587} value={587} />
      <div className="button">
        {calButtons.flat().map((value, index) => {
          return (
            <Button
              key={index}
              type='button'
              className={
                value === 'CLEAR'
                  ? 'button__item button__clear button__bg-blue'
                  : typeof value === 'string'
                  ? 'button__item button__bg-blue'
                  : 'button__item button__bg-orange'
              }
              value={value}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
