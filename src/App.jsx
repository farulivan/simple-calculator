import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import Button from './components/Button';
import Screen from './components/Screen';
import { calcActions } from './store';

const calButtons = [
  ['CLEAR', 'x'],
  [1, 2, 3, '+'],
  [4, 5, 6, '-'],
  [7, 8, 9, '%'],
  ['+/-', 0, '.', '='],
];

function App() {
  const dispatch = useDispatch();
  const operand = useSelector(state => state.operand);
  const answer = useSelector(state => state.answer);
  const history = useSelector(state => state.history);
  // const operator = useSelector(state => state.operator);

  const numberHandler = e => {
    e.preventDefault();
    const value = e.target.innerHTML;
    dispatch(calcActions.addOperand(value));
  };

  const clearHandler = e => {
    e.preventDefault();
    dispatch(calcActions.clearOperand());
  };

  const operatorHandler = e => {
    e.preventDefault();
    const value = e.target.innerHTML;
    dispatch(calcActions.setOperator(value));
  };

  const equalHandler = e => {
    e.preventDefault();
    dispatch(calcActions.calculate());
  };

  const decimalHandler = e => {
    e.preventDefault();
    const value = e.target.innerHTML;
    dispatch(calcActions.setDecimal(value))
  }

  const plusMinusHandler = e => {
    e.preventDefault();
    const value = e.target.innerHTML;
    dispatch(calcActions.setPlusMinus(value))
  }

  return (
    <div className="App">
      <Screen
        history={history}
        value={operand ? operand : answer}
      />
      <div className="button">
        {calButtons.flat().map((value, index) => {
          return (
            <Button
              key={index}
              type="button"
              className={
                value === 'CLEAR'
                  ? 'button__item button__clear button__bg-blue'
                  : typeof value === 'string'
                  ? 'button__item button__bg-blue'
                  : 'button__item button__bg-orange'
              }
              value={value}
              onClick={
                value === 'CLEAR'
                  ? clearHandler
                  : value === '+/-'
                  ? plusMinusHandler
                  : value === '='
                  ? equalHandler
                  : value === '%' ||
                    value === 'x' ||
                    value === '-' ||
                    value === '+'
                  ? operatorHandler
                  : value === '.'
                  ? decimalHandler
                  : numberHandler
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
